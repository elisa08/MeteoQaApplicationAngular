import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-meteo-qa-affichage',
  templateUrl: './meteo-qa-affichage.component.html',
  styleUrls: ['./meteo-qa-affichage.component.css']
})
export class MeteoQaAffichageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myQaMeteoMap = L.map('meteoQaMap').setView([46,2], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      className: 'map-tiles'
    }).addTo(myQaMeteoMap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('LA commune').addTo(myQaMeteoMap).openPopup();
  }

}
