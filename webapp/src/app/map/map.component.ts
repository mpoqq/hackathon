import { ObserversModule } from "@angular/cdk/observers";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ReflectiveInjector,
  ViewChild,
} from "@angular/core";
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { RestService, Details, OSM, Tile } from "./rest.service";

interface IHeadLayer {
  heatLayer(points: any[], obj: object);
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  private readonly inKm = 1 / 111 / 10;
  private readonly centerLong = 48.4060822;
  private readonly centerLat = 9.9876076;
  private heat: any;
  private curRect: any[];

  @ViewChild("tooltip")
  tooltipRef: ElementRef<HTMLElement>;
  address = '';


  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 16, attribution: '...' })
    ],
    zoom: 14,
    center: L.latLng(
      this.centerLong - this.inKm * 13,
      this.centerLat + this.inKm * 13
    ),
  };

  layers = [];

  constructor(
    private chRef: ChangeDetectorRef,
    private restService: RestService,
  ) { }

  ngOnInit(): void { }

  newAddressPoints = [];
  addressPoints = [];
  onMapReady(map) {


    //const heat = L.heatLayer(newAddressPoints).addTo(map);


    this.restService.getAllTiles().subscribe();


    this.restService.tiles.subscribe((tiles: Tile[]) => {
      this.newAddressPoints = [];
      let max = 0;
      tiles.forEach((tile: Tile) => {
        if (avg(tile) > max) {
          max = avg(tile);
        }

        this.newAddressPoints.push([tile.latitude, tile.longitude, avg(tile)])
        this.addressPoints.push([tile.latitude, tile.longitude, tile])
      })

      this.newAddressPoints.forEach(x => x[2] = x[2] / max);
      console.log(max)

      if (this.heat) {
        this.heat.remove();
      }
      this.heat = (L as any as IHeadLayer).heatLayer(this.newAddressPoints,
        {
          radius: 30,
          blur: 20,
          gradient: {
            0.0: 'red',
            0.9: 'yellow',
            1.0: 'green'
          }
        });
      this.heat = this.heat.addTo(map);
      //this.heat.remove();


    });

    map.on("mousemove", this.mouseMv.bind(this));
  }


  mouseMv(e) {


    const lat = e.latlng.lat;
    const lng = e.latlng.lng;


    const rect = [
      [lat - (lat % this.inKm), lng - (lng % this.inKm)],
      [lat - (lat % this.inKm) + this.inKm, lng - (lng % this.inKm)],
      [
        lat - (lat % this.inKm) + this.inKm,
        lng - (lng % this.inKm) + this.inKm,
      ],
      [lat - (lat % this.inKm), lng - (lng % this.inKm) + this.inKm],
    ];

    if (JSON.stringify(this.curRect) == JSON.stringify(rect)) {
      return;
    }

    var addressPoint: Tile;
    this.addressPoints.forEach(a => {
      if (lat.toString().substring(0, 5).startsWith(a[0].toString().substring(0, 5)) && lng.toString().substring(0, 5).startsWith(a[1].toString().substring(0, 5))) {
        addressPoint = a[2];
      }
    });


    this.tooltipRef.nativeElement.innerHTML = "<b>Ø 4km</b><br>";

    this.tooltipRef.nativeElement.innerHTML = '<b>Ø 3km</b><br>'

    if(addressPoint) {
    this.tooltipRef.nativeElement.innerHTML += `BarScore: ${Math.trunc(addressPoint.barScore)}%<br>`
    this.tooltipRef.nativeElement.innerHTML += `GroceriesScore: ${Math.trunc(addressPoint.groceriesScore)}%<br>`
    this.tooltipRef.nativeElement.innerHTML += `RestaurantScore: ${Math.trunc(addressPoint.restaurantScore)}%<br>`
    this.tooltipRef.nativeElement.innerHTML += `TransportationScore: ${Math.trunc(addressPoint.transportationScore)}%<br>`
    this.tooltipRef.nativeElement.innerHTML += `ParkingLotScore: ${Math.trunc(addressPoint.parkingLotScore)}%<br>`
    }

    this.curRect = rect;

    this.layers = [];
    const polygon = L.polygon(this.curRect, {
      color: "white",
    });

    const popup = polygon.bindPopup("Loading...");
    popup.addEventListener('click', (x) => {
      var popupContentBars = '';
      var popupContentGroceries = '';
      var popupContentTransport = '';
      var popupContentRestaurant = '';
      var popupContentParkingLots = '';
      var bars: Details[];
      var groceries: Details[];
      var transportation: Details[];
      var restaurant: Details[];
      var parkingLots: Details[];

      this.restService.getDetails(parseInt(addressPoint.id)).subscribe((x: Details[]) => {
        bars = x.filter(d => d.type == "BAR");
        var barsCount = bars.length;
        bars = bars.sort((d1, d2) => parseFloat(d2.distance) - parseFloat(d1.distance)).reverse().splice(0, 3);
        popupContentBars += `<h3>Bars (#${barsCount})</h3>`;
        bars.forEach(bar => {
          this.restService.getSpecificInfos(bar.nodeId).subscribe((x: OSM.RootObject) => {
            let res = '';
            for (const elem of x.elements) {
              if (elem.tags.name) {
                res += elem.tags.name;
              }
            }
            popupContentBars += res + ' ' + parseInt(bar.distance) + "m</br>";
            var text = document.createElement("div");
            text.innerHTML = popupContentBars + popupContentGroceries + popupContentTransport + popupContentRestaurant + popupContentParkingLots;
            popup.setPopupContent(text);
          });
        });

        groceries = x.filter(d => d.type == "GROCERY");
        var groceriesCount = groceries.length;
        groceries = groceries.sort((d1, d2) => parseFloat(d2.distance) - parseFloat(d1.distance)).reverse().splice(0, 3);
        popupContentGroceries += `<h3>Groceries (#${groceriesCount})</h3>`;
        groceries.forEach(bar => {
          this.restService.getSpecificInfos(bar.nodeId).subscribe((x: OSM.RootObject) => {
            let res = '';
            for (const elem of x.elements) {
              if (elem.tags.name) {
                res += elem.tags.name;
              }
            }
            popupContentGroceries += res + ' ' + parseInt(bar.distance) + "m</br>";
            var text = document.createElement("div");
            text.innerHTML = popupContentBars + popupContentGroceries + popupContentTransport + popupContentRestaurant + popupContentParkingLots;
            popup.setPopupContent(text);
          });
        });

        transportation = x.filter(d => d.type == "TRANSPORT");
        var transportationCount = transportation.length;
        transportation = transportation.sort((d1, d2) => parseFloat(d2.distance) - parseFloat(d1.distance)).reverse().splice(0, 3);
        popupContentTransport += `<h3>Transportation (#${transportationCount})</h3>`;
        transportation.forEach(bar => {
          this.restService.getSpecificInfos(bar.nodeId).subscribe((x: OSM.RootObject) => {
            let res = '';
            for (const elem of x.elements) {
              if (elem.tags.name) {
                res += elem.tags.name;
              }
            }
            popupContentTransport += res + ' ' + parseInt(bar.distance) + "m</br>";
            var text = document.createElement("div");
            text.innerHTML = popupContentBars + popupContentGroceries + popupContentTransport + popupContentRestaurant + popupContentParkingLots;
            popup.setPopupContent(text);
          });
        });

        restaurant = x.filter(d => d.type == "RESTAURANT");
        var restaurantCount = restaurant.length;
        restaurant = restaurant.sort((d1, d2) => parseFloat(d2.distance) - parseFloat(d1.distance)).reverse().splice(0, 3);
        popupContentRestaurant += `<h3>Restaurant (#${restaurantCount})</h3>`;
        restaurant.forEach(bar => {
          this.restService.getSpecificInfos(bar.nodeId).subscribe((x: OSM.RootObject) => {
            let res = '';
            for (const elem of x.elements) {
              if (elem.tags.name) {
                res += elem.tags.name;
              }
            }
            popupContentRestaurant += res + ' ' + parseInt(bar.distance) + "m</br>";
            var text = document.createElement("div");
            text.innerHTML = popupContentBars + popupContentGroceries + popupContentTransport + popupContentRestaurant + popupContentParkingLots;
            popup.setPopupContent(text);
          });
        });

        parkingLots = x.filter(d => d.type == "PARKING");
        var parkingLotsCount = parkingLots.length;
        parkingLots = parkingLots.sort((d1, d2) => parseFloat(d2.distance) - parseFloat(d1.distance)).reverse().splice(0, 3);
        popupContentParkingLots += `<h3>ParkingLots (#${parkingLotsCount})</h3>`;
        parkingLots.forEach(bar => {
          this.restService.getSpecificInfos(bar.nodeId).subscribe((x: OSM.RootObject) => {
            let res = '';
            for (const elem of x.elements) {
              if (elem.tags.name) {
                res += elem.tags.name;
              }
            }
            popupContentParkingLots += res + ' ' + parseInt(bar.distance) + "m</br>";
            var text = document.createElement("div");
            text.innerHTML = popupContentBars + popupContentGroceries + popupContentTransport + popupContentRestaurant + popupContentParkingLots;
            popup.setPopupContent(text);
          });
        });

      });



      this.restService.reverseGeocode(this.curRect[0]).subscribe(x => {
        this.address = x;
        //popup.setPopupContent(`<a href="https://www.immobilo.de/suchergebnisse?t=${x}&l=Ulm&a=de.ulm">Finde hier eine Wohnung!</a>`);
      })
    })


    this.layers.push(polygon);

    this.chRef.detectChanges();

    //this.heat.addLatLng(e.latlng);
  }


}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function avg(tile: Tile): number {
  return (
    (tile.parkingLotScore +
      tile.restaurantScore +
      tile.transportationScore +
      tile.groceriesScore +
      tile.barScore) /
    5 /
    100
  );
}
