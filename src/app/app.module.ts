import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoQaModule } from './app-meteo-qa/meteo-qa.module';
import { HttpClientModule } from '@angular/common/http';
import { MeteoRoutingModule } from './app-meteo-qa/meteo-routing.module';
import { MeteoQaAffichageComponent } from './meteo-qa-affichage/meteo-qa-affichage.component';
import { MeteoQaForumComponent } from './meteo-qa-forum/meteo-qa-forum.component';
import { MeteoQaCommuneComponent } from './meteo-qa-commune/meteo-qa-commune.component';
import { MeteoQaNavComponent } from './meteo-qa-nav/meteo-qa-nav.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    MeteoRoutingModule,
    AppRoutingModule,
    MeteoQaModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
