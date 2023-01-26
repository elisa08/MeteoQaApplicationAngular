import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoQaModule } from './app-meteo-qa/meteo-qa.module';
import { HttpClientModule } from '@angular/common/http';
import { MeteoRoutingModule } from './app-meteo-qa/meteo-routing.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    MeteoRoutingModule,
    AppRoutingModule,
    MeteoQaModule,
    HttpClientModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
