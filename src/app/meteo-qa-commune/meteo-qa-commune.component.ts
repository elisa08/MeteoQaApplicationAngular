import { Component, OnInit } from '@angular/core';
import { Commune } from '../app-meteo-qa/models/Commune';
import { Indicateur } from '../app-meteo-qa/models/Indicateurs';
import { Meteo } from '../app-meteo-qa/models/Meteo';
import { MeteoQaAccueilService } from '../app-meteo-qa/services/meteo-qa-accueil.service';
import { MeteoQaApiService } from '../app-meteo-qa/services/meteo-qa-api.service';
import { MeteoQaCommuneService } from '../app-meteo-qa/services/meteo-qa-commune.service';

@Component({
  selector: 'app-meteo-qa-commune',
  templateUrl: './meteo-qa-commune.component.html',
  styleUrls: ['./meteo-qa-commune.component.css']
})
export class MeteoQaCommuneComponent implements OnInit {

  indicateur:Indicateur={
    date:"",
    sulphur_dioxide:0,
    uv_index:0,
    nitrogen_dioxide:0,
    pm10:0,
    ozone:0,
    carbon_monoxide:0
  };
  meteo:Meteo={
    temperature:"",
    vitesse:"",
    directionVent:"",
    niveauNuage:"",
    precipitation:"",
    humidite:"",
    neige:"",
    date:""
  };
  commune!:Commune;
  communeListe:any;
  meteos!:any;

  constructor(private serviceCommune : MeteoQaCommuneService, private serviceMeteo : MeteoQaApiService) { }
  currentCommuneId = 'Id commune';
  ngOnInit(): void {
    this.getCommune();
  }
  getCommune(){
    this.serviceCommune.getCommune().subscribe(data=>{
      this.communeListe= data;
      console.log(data);
    })
  }

  getCommuneById(idCommune:any){

    let communeId= idCommune.target.value;
    console.log(communeId)
    // recuperation de coordonnées géographique
    this.serviceCommune.getCommuneById(communeId).subscribe(data=>{
      this.commune= data;
      if(this.commune){
        // this.serviceMeteo.getMeteoBylatitudeAndLongitude(this.commune.latitude,this.commune.longitude)
        // .subscribe(data=>{
        //   this.meteos= data;
        //   // this.meteos.push(this.meteo);
        //   console.log(this.meteos)
        // }
        // )
      }else{
        alert("Commune introuvable");
      }
      console.log(data);
    })
    // recupération de la météo


  }

}
