import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../app-meteo-qa/services/config.service';

@Component({
  selector: 'app-meteo-qa-nav',
  templateUrl: './meteo-qa-nav.component.html',
  styleUrls: ['./meteo-qa-nav.component.css']
})
export class MeteoQaNavComponent implements OnInit {

  constructor(private serviceConfig : ConfigService, private router : Router) { }

  ngOnInit(): void {
  }

  logoutUser(){

    this.serviceConfig.logout();

    this.router.navigate(["meteo-qa-accueil"]);

  }

}
