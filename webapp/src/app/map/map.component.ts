import { ObserversModule } from '@angular/cdk/observers';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ReflectiveInjector, ViewChild } from '@angular/core';
import * as L from "leaflet";
import 'leaflet.heat/dist/leaflet-heat.js'
import { RestService, Details, OSM, Tile } from './rest.service';

interface IHeadLayer {
  heatLayer(points: any[], obj: object);
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private readonly inKm = 1/111 / 10;
  private readonly centerLong = 48.4060822;
  private readonly centerLat = 9.9876076;
  private heat: any;
  private curRect: any[];

  @ViewChild('tooltip')
  tooltipRef: ElementRef<HTMLElement>;
  address = '';
  

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
  
   newAddressPoints = [];
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
      })

      this.newAddressPoints.forEach(x => x[2] = x[2] / max);
      console.log(max)
      
      if(this.heat) {
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
        popup.setPopupContent(res);
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
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function avg(tile: Tile): number {
  return ((tile.parkingLotScore + tile.restaurantScore + tile.transportationScore + tile.groceriesScore + tile.barScore) / 5) / 100;
}