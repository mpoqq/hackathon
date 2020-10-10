import os
import overpass
import psycopg2

from dataclasses import dataclass, astuple, asdict
from typing import List
from enum import Enum
from math import sin, cos, asin, sqrt, radians

GROCERIE_UPPER = 5
TRANSPORT_UPPER = 1
BARS_UPPER = 3
PARKING_UPPER = 3
RESTAURANT_UPPER = 5

COORDINATE_TO_KM = 1. / 111.


class NodeType(str, Enum):
    BAR = "bar"
    GROCERY = "grocery"
    PARKING = "parking"
    RESTAURANT = "restaurant"
    TRANSPORT = "transportation"


@dataclass
class Tile:
    lat: float
    lon: float
    barScore: float
    groceryScore: float
    parkingScore: float
    restaurantScore: float
    transportScore: float


@dataclass
class Node:
    tileId: int
    nodeType: str
    distance: float
    nodeId: int


def polynomial(d: float) -> float:
    return -2.84513e-9 * (d**3) + .0000243496 * (d**2) - .0788596 * d + 107.943


def get_score(nodes: List[Node], upper_bound) -> float:
    if not nodes:
        return 0.0

    distances = [
        n.distance for n in sorted(
            nodes[:upper_bound], key=lambda x: x.distance, reverse=True)
    ]
    n = len(distances)
    score_nom = sum([polynomial(d) * i for d, i in enumerate(distances)])
    score_denom = (n * (n + 1.)) / 2.
    return score_nom / score_denom


def connect_db() -> psycopg2.extensions.connection:
    return psycopg2.connect(
        "host=localhost dbname=hackathon user=postgres password=password")


def create_tables() -> None:
    commands = ("""
        CREATE TABLE IF NOT EXISTS tiles (
            id SERIAL PRIMARY KEY,
            lat REAL NOT NULL,
            lon REAL NOT NULL,
            barScore REAL,
            groceryScore REAL,
            parkingScore REAL,
            restaurantScore REAL,
            transportScore REAL
        ) """, """
        CREATE TABLE IF NOT EXISTS nodes (
            id SERIAL PRIMARY KEY,
            tileId INT NOT NULL,
            nodeType VARCHAR(20) NOT NULL,
            distance REAL NOT NULL,
            nodeId VARCHAR(11) NOT NULL,
            FOREIGN KEY (tileID) REFERENCES tiles (id)
        )
        """)
    conn = None
    try:
        conn = connect_db()
        cur = conn.cursor()
        for command in commands:
            cur.execute(command)
        cur.close()
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print("create:", error)
    finally:
        if conn is not None:
            conn.close()


def insert_tile(tile: Tile) -> int:
    sql = f"""INSERT INTO tiles({','.join([*asdict(tile)])})
    VALUES ({','.join(['%s' for _ in range(len(astuple(tile)))])})
    RETURNING id"""
    conn = None
    tileId: int = -1

    try:
        conn = connect_db()
        cur = conn.cursor()
        cur.execute(sql, astuple(tile))
        tileId = cur.fetchone()[0]
        conn.commit()
        cur.close()

        return tileId
    except (Exception, psycopg2.DatabaseError) as error:
        print("insert tile: ", error)
    finally:
        if conn is not None:
            conn.close()


def insert_nodes(nodes: Node) -> None:
    sql = f"""INSERT INTO nodes({','.join([*asdict(nodes[0])])})
    VALUES ({','.join(['%s' for _ in range(len(astuple(nodes[0])))])})
    """
    conn = None

    try:
        conn = connect_db()
        cur = conn.cursor()
        sql_vars = [astuple(node) for node in nodes]
        cur.executemany(sql, sql_vars)
        conn.commit()
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print("insert node: ", error)
    finally:
        if conn is not None:
            conn.close()


# Return the distance between to longitude/latitude pairs in meters.
# It uses the Haversine Formula.
def get_distance(lon1, lat1, lon2, lat2) -> float:
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * asin(sqrt(a))
    r = 6371
    return r * c * 1000  # to return in meters


# Use the overpass API to query for the nodes filtered by the
def get_nodes(overpassapi, querystring, nodeType, lat, lon) -> List[Node]:
    response = overpassapi.get(
        f'node [{querystring}] (around:4000.0,{lat},{lon});')
    print(f"Received {len(response['features'])} results.")

    return [
        Node(
            0, nodeType.name,
            get_distance(lat, lon, feature['geometry']['coordinates'][1],
                         feature['geometry']['coordinates'][0]), feature['id'])
        for feature in response['features']
    ]


def get_shops(overpassapi, lat, lon) -> List[Node]:
    print(f"Getting supermarkets for {lat}:{lon}.")
    return get_nodes(overpassapi, '"shop"="supermarket"', NodeType.GROCERY,
                     lat, lon)


def get_restaurants(overpassapi, lat, lon) -> List[Node]:
    print(f"Getting restaurants for {lat}:{lon}.")
    return get_nodes(overpassapi, '"amenity"~"restaurant|fast_food"',
                     NodeType.RESTAURANT, lat, lon)


def get_bars(overpassapi, lat, lon) -> List[Node]:
    print(f"Getting bars for {lat}:{lon}.")
    return get_nodes(overpassapi, '"amenity"~"cafe|bar"', NodeType.BAR, lat,
                     lon)


def get_parking_lots(overpassapi, lat, lon) -> List[Node]:
    print(f"Getting parking lots for {lat}:{lon}.")
    return get_nodes(overpassapi, '"amenity"="parking"', NodeType.PARKING, lat,
                     lon)


def get_public_transportation(overpassapi, lat, lon) -> List[Node]:
    print(f"Getting public transport stations for {lat}:{lon}.")
    return get_nodes(overpassapi, '"public_transport"="stop_position"',
                     NodeType.TRANSPORT, lat, lon)


create_tables()
print("Created tables")
tile_list = []

overpassapi = overpass.API()

print("fetching nodes in tiles")
with open(os.getcwd() + '/fetcher/coordinates.txt', 'r') as coordinates:
    for lat_lon in coordinates:
        lat_lon = lat_lon.strip()
        lat, lon = lat_lon.split(" ")
        lat, lon = float(lat), float(lon)
        groceries = get_shops(overpassapi, lat, lon)
        groceriesScore = get_score(groceries, GROCERIE_UPPER)
        restaurants = get_restaurants(overpassapi, lat, lon)
        restaurantScore = get_score(restaurants, RESTAURANT_UPPER)
        bars = get_bars(overpassapi, lat, lon)
        barScore = get_score(bars, BARS_UPPER)
        parking_lots = get_parking_lots(overpassapi, lat, lon)
        parkingScore = get_score(parking_lots, PARKING_UPPER)
        transport = get_public_transportation(overpassapi, lat, lon)
        transportScore = get_score(transport, TRANSPORT_UPPER)
        tile = Tile(lat, lon, barScore, groceriesScore, parkingScore,
                    restaurantScore, transportScore)
        tileID = insert_tile(tile)
        nodes = [*groceries, *restaurants, *bars, *parking_lots, *transport]
        for n in nodes:
            n.tileId = tileID
        print(nodes)
        print(
            f"GroceryScore: {groceriesScore}; restaurantScore: {restaurantScore}; barScore: {barScore}; transportScore: {transportScore}; parkingScore: {parkingScore}"
        )
        if not nodes:
            continue
        else:
            insert_nodes(nodes)
