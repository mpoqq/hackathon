import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { Geocode } from "./geocode";
import { map, tap } from "rxjs/operators";

export declare module OSM {
  export interface Tags {
    brand: string;
    name: string;
    shop: string;
    toilets: string;
    wheelchair: string;
  }

  export interface Element {
    type: string;
    id: number;
    lat: number;
    lon: number;
    timestamp: Date;
    version: number;
    changeset: number;
    user: string;
    uid: number;
    tags: Tags;
  }

  export interface RootObject {
    version: string;
    generator: string;
    copyright: string;
    attribution: string;
    license: string;
    elements: Element[];
  }
}
export class Tile {
  id: string;
  latitude: string;
  longitude: string;
  groceriesScore: number;
  transportationScore: number;
  parkingLotScore: number;
  barScore: number;
  restaurantScore: number;
}

export class Details {
  id: string;
  tilesId: string;
  type: string;
  distance: string;
  nodeId: string;

  constructor(
    id: string,
    tilesId: string,
    type: string,
    distance: string,
    nodeId: string
  ) {
    this.id = id;
    this.tilesId = tilesId;
    this.type = type;
    this.distance = distance;
    this.nodeId = nodeId;
  }
}

@Injectable({
  providedIn: "root",
})
export class RestService {
  public tiles = new BehaviorSubject<Tile[]>([]);
  public initialTiles = [];

  constructor(private client: HttpClient) {}

  getDetails(coords: [number, number]): Observable<Details[]> {
    return of([
      new Details(
        "ID",
        "TilesID",
        "Bar",
        "" + Math.random() * 10000,
        "1015047079"
      ),
      new Details(
        "ID",
        "TilesID",
        "Bar",
        "" + Math.random() * 10000,
        "1015047079"
      ),
      new Details(
        "ID",
        "TilesID",
        "Studio",
        "" + Math.random() * 10000,
        "1015047079"
      ),
    ]);
  }

  getSpecificInfos(): Observable<OSM.RootObject> {
    return this.client.get<OSM.RootObject>(
      "https://api.openstreetmap.org/api/0.6/node/1015047079.json"
    );
  }

  getAllTiles(): Observable<Tile[]> {
    return this.client
      .get<Tile[]>("https://e97cdbfd571e.ngrok.io/api/tiles")
      .pipe(
        tap((tiles: Tile[]) => {
          this.initialTiles = tiles;
          this.tiles.next(JSON.parse(JSON.stringify(tiles)));
        })
      );
  }

  reverseGeocode(coord: [number, number]): Observable<string> {
    return this.client
      .get<Geocode>(
        `https://api.opencagedata.com/geocode/v1/json?key=255440e4c59440e09a2c30126391b76a&q=${coord[0]},${coord[1]}&pretty=1`
      )
      .pipe(
        map((g: Geocode) => {
          if (g.results.length === 0) {
            return "";
          }
          const comp = g.results[0].components;
          let firstPart: string;
          if (comp.road) {
            firstPart = comp.road;
          }
          if (comp.neighbourhood) {
            firstPart = comp.neighbourhood;
          }
          if (!firstPart) {
            return "";
          }
          if (!comp.city) {
            return "";
          }
          return `${firstPart}, ${comp.postcode} ${comp.city}`;
        })
      );
  }
}
