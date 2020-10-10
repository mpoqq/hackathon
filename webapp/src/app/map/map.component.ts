import { ObserversModule } from '@angular/cdk/observers';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ReflectiveInjector, ViewChild } from '@angular/core';
import * as L from "leaflet";
import 'leaflet.heat/dist/leaflet-heat.js'
import { RestService, Details, OSM, Tile } from './rest.service';

interface IHeadLayer {
  heatLayer(points: any[]);
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private readonly inKm = 1/112 / 10;
  private readonly centerLong = 48.4060822;
  private readonly centerLat = 9.9876076;
  private heat: any;
  private curRect: any[];

  @ViewChild('tooltip')
  tooltipRef: ElementRef<HTMLElement>;
  

  options = {
    layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 16, attribution: '...' })
    ],
    zoom: 14,
    center: L.latLng(this.centerLong - this.inKm * 13, this.centerLat + this.inKm * 13)
  };

  layers = [ ];

  constructor(
    private chRef: ChangeDetectorRef,
    private restService: RestService,
  ) {}

  ngOnInit(): void { }

  onMapReady(map) {
    let newAddressPoints = [];
    
    //const heat = L.heatLayer(newAddressPoints).addTo(map);

    this.restService.getAllTiles().subscribe((tiles: Tile[]) => {
      tiles.forEach((tile: Tile) => {
        newAddressPoints.push([tile.latitude, tile.longitude, avg(tile)])
      })
    });

    this.heat = (L as any as IHeadLayer).heatLayer(newAddressPoints);
    this.heat.addTo(map);
    map.on('mousemove', this.mouseMv.bind(this));
  }


  mouseMv(e){
    
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    
    const rect = [
      [lat - lat % this.inKm, lng - lng % this.inKm],
      [lat - lat % this.inKm + this.inKm, lng - lng % this.inKm],
      [lat - lat % this.inKm + this.inKm, lng - lng % this.inKm + this.inKm],
      [lat - lat % this.inKm, lng - lng % this.inKm + this.inKm],
    ];

    if (JSON.stringify(this.curRect) == JSON.stringify(rect)) {
      return;
    }

    

    this.restService.getDetails([1, 2]).subscribe((x: Details[]) => {
      this.tooltipRef.nativeElement.innerHTML = '';
      const types = new Map<string, number>();
      x.forEach((t: Details) => {
        let amount = 0;
        if (types.has(t.type)) {
          amount = types.get(t.type);
        }
        types.set(t.type, amount+1)
      });
      
      this.tooltipRef.nativeElement.innerHTML = '<b>Ø 3km</b><br>'
      types.forEach((val, key) => {
        this.tooltipRef.nativeElement.innerHTML += `${key}: ${val}<br>`
      });
      
    
      //console.log(x);
    });

    
    this.curRect = rect;

    this.layers = [];
    const polygon = L.polygon(this.curRect, {
      color: 'white'
    })

    const popup = polygon.bindPopup("Infos");
    popup.addEventListener('click', () => {
      this.restService.getSpecificInfos().subscribe((x: OSM.RootObject) => {
        let res = '';
        for (const elem of x.elements) {
          res += elem.tags.name;
        }
        //popup.setPopupContent(res);
      });
      this.restService.reverseGeocode(this.curRect[0]).subscribe(x => {
        popup.setPopupContent(`<a href="https://www.immobilo.de/suchergebnisse?t=${x}&l=Ulm&a=de.ulm">Finde hier eine Wohnung!</a>`);
      })
    })
    

    this.layers.push(      polygon);
    
    this.chRef.detectChanges();
      
		//this.heat.addLatLng(e.latlng);
  }
  
  
  
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function avg(tile: Tile): number {
  return (tile.parkingLotScore + tile.restaurantScore + tile.transportationScore + tile.groceriesScore + tile.barScore) / 5;
}