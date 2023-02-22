import { Component, Input, OnInit } from '@angular/core';
import { MeteoQaFavorisService } from '../app-meteo-qa/services/meteo-qa-favoris.service';

@Component({
  selector: 'app-meteo-qa-widget',
  templateUrl: './meteo-qa-widget.component.html',
  styleUrls: ['./meteo-qa-widget.component.css']
})
export class MeteoQaWidgetComponent implements OnInit {

  @Input() listMeteos: any;


  constructor(private favoriService : MeteoQaFavorisService) { }

  ngOnInit(): void {
  }



}
