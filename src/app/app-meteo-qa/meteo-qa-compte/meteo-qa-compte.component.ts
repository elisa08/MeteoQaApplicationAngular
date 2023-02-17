import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoQaAuthService } from '../services/meteo-qa-auth.service';

@Component({
  selector: 'app-meteo-qa-compte',
  templateUrl: './meteo-qa-compte.component.html',
  styleUrls: ['./meteo-qa-compte.component.css']
})
export class MeteoQaCompteComponent implements OnInit {

  isLogged=true;
  userConnectedDetail:any=[];

  constructor(private router : Router, private serviceAuth : MeteoQaAuthService) { }

  ngOnInit(): void {


    // if(this.serviceAuth.isConnected()===false){

    //   this.router.navigate(["meteo-qa-login"]);

    // }
  }

}
