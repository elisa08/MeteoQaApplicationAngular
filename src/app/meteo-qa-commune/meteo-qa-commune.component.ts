import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commune } from '../app-meteo-qa/models/Commune';
import { Indicateur } from '../app-meteo-qa/models/Indicateurs';
import { Meteo } from '../app-meteo-qa/models/Meteo';
import { MeteoQaAccueilService } from '../app-meteo-qa/services/meteo-qa-accueil.service';
import { MeteoQaApiService } from '../app-meteo-qa/services/meteo-qa-api.service';
import { MeteoQaAuthService } from '../app-meteo-qa/services/meteo-qa-auth.service';
import { MeteoQaCommuneService } from '../app-meteo-qa/services/meteo-qa-commune.service';
import { MeteoQaFavorisService } from '../app-meteo-qa/services/meteo-qa-favoris.service';
import { MeteoQaIndicateurService } from '../app-meteo-qa/services/meteo-qa-indicateur.service';

@Component({
  selector: 'app-meteo-qa-commune',
  templateUrl: './meteo-qa-commune.component.html',
  styleUrls: ['./meteo-qa-commune.component.css']
})
export class MeteoQaCommuneComponent implements OnInit {


  commune!:Commune;
  communeListe:any;
  meteos!:any;
  indicateurs!:any;
  indic!:any;

  haveIndicateurs!: boolean;

  listIndicateur= this.indicateurs;
  listMeteos = this.meteos;
  formFavorite!:FormGroup;

  haveData=false;
  haveIndic= this.haveIndicateurs;

  utilisateur:any;
  singleUser:any;

  userDetail:any;

  constructor(private serviceCommune : MeteoQaCommuneService, private serviceMeteo : MeteoQaApiService,
  private favoriService : MeteoQaFavorisService, private builder: FormBuilder,
  private indicateurService: MeteoQaIndicateurService, private serviceAuth: MeteoQaAuthService, private router: Router) {



   }

  currentCommuneId = 'Id commune';

  ngOnInit(): void {

    this.formFavorite = this.builder.group({

      meteo: ['', [Validators.required]],
      polluant: ['', [Validators.required]],


    });

    this.getCommune();

    this.userDetail= localStorage.getItem("login");
    this.getUserByLogin(this.userDetail);

  }

  getCommune(){

    this.serviceCommune.getCommune().subscribe(data=>{

      this.communeListe= data;
      console.log(data);

    })

  }

  getCommuneById(idCommune:any){

    let communeId= idCommune.target.value;

    console.log(communeId);

    // recuperation de coordonnées géographique
    this.serviceCommune.getCommuneById(communeId).subscribe(data=>{

      this.commune= data;

      if(this.commune){

        this.serviceMeteo.getMeteoBylatitudeAndLongitude(this.commune.latitude,this.commune.longitude)
        .subscribe(data=>{

          this.meteos= data;
          this.haveData= true;

        }
        )

        this.indicateurService.getIndicateurBylatitudeAndLongitude(this.commune.latitude,this.commune.longitude)
        .subscribe(data=>{

          this.indicateurs= data;
          this.haveIndicateurs= true;
          this.indic= Object.keys(this.indicateurs[0]);
          for (const iterator of this.indic) {
            if(iterator=="date"){

            }
          }

        }
        )


      }else{

        alert("Commune introuvable");

      }

      console.log(data);

    })
    // recupération de la météo

  }

  addFavorite(){

    const dataFavorite= this.formFavorite.value;
    console.log(this.singleUser.idUtilisateur)

    let data= {
      typeFavori: dataFavorite.meteo?"meteo":"indicateur",
      polluant: dataFavorite.polluant,
      commune: this.commune.nom,
      utilisateur: {idUtilisateur: this.singleUser.idUtilisateur}
    }

    console.log(data);


    this.favoriService.addToFavorite(data).subscribe((callback) => {

      console.log(callback);
      this.router.navigate(["meteo-qa-compte"]);


    },
    (error) => {

      alert("Réessayez");

    }

  )}

  getUserByLogin(login:string){

    this.serviceAuth.getUserByUsername(login).subscribe(
      (callback) => {
        this.utilisateur= callback;
        console.log(this.utilisateur);
       this.utilisateur.forEach((element: { username: string; }) => {
        if(element.username===login){
          this.singleUser= element;
        }
       }
       );

       console.log(this.singleUser);

      },
      (error) => {

      }
    );

  }




}
