import { Component, OnInit } from '@angular/core';
import { Commune } from '../models/Commune';
import { Indicateur } from '../models/Indicateurs';
import { MeteoQaAccueilService } from '../services/meteo-qa-accueil.service';
import { MeteoQaApiService } from '../services/meteo-qa-api.service';
import { MeteoQaCommuneService } from '../services/meteo-qa-commune.service';

@Component({
  selector: 'app-meteo-qa-accueil',
  templateUrl: './meteo-qa-accueil.component.html',
  styleUrls: ['./meteo-qa-accueil.component.css']
})
export class MeteoQaAccueilComponent implements OnInit {

  data:Indicateur[]=[];
  commune!:Commune;
  communeListe:any;

  constructor(private service : MeteoQaAccueilService, private serviceCommune : MeteoQaCommuneService, private serviceMeteo : MeteoQaApiService) { }

  ngOnInit(): void {

    // let data= {
    //   lat:
    // };


    this.getCommune();

    // this.service.getMeteo().subscribe(data=>{
    //   this.data=data;
    // });

    // this.serviceCommune.getCommuneByLongitudeLatitude(this.commune).subscribe(data=>{
    //   this.commune=data;

    // });


  }

  getCommune(){
    this.serviceCommune.getCommune().subscribe(data=>{
      this.communeListe= data;
      console.log(data);
    })
  }

  getCommuneById(idCommune:any){
    let communeId= idCommune.target.value;
    // recuperation de coordonnées géographique
    this.serviceCommune.getCommuneById(communeId).subscribe(data=>{
      this.commune= data;
      if(this.commune){
        this.serviceMeteo.getMeteoBylatitudeAndLongitude(this.commune.latitude,this.commune.longitude
          ).subscribe(data=>{
         console.log(data)})
      }else{
        alert("Commune introuvable");
      }
      console.log(data);
    })
    // recupération de la météo


  }

}
