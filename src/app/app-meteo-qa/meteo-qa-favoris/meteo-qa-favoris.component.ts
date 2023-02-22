import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeteoQaFavorisService } from '../services/meteo-qa-favoris.service';

@Component({
  selector: 'app-meteo-qa-favoris',
  templateUrl: './meteo-qa-favoris.component.html',
  styleUrls: ['./meteo-qa-favoris.component.css']
})
export class MeteoQaFavorisComponent implements OnInit {

  constructor(private serviceFav : MeteoQaFavorisService,  private builder : FormBuilder) { }

  ngOnInit(): void {

  }


}
