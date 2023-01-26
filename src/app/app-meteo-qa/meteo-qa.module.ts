import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoQaAccueilComponent } from './meteo-qa-accueil/meteo-qa-accueil.component';
import { MeteoQaLoginComponent } from './meteo-qa-login/meteo-qa-login.component';
import { MeteoQaInscriptionComponent } from './meteo-qa-inscription/meteo-qa-inscription.component';
import { MeteoQaCompteComponent } from './meteo-qa-compte/meteo-qa-compte.component';
import { MeteoQaFavorisComponent } from './meteo-qa-favoris/meteo-qa-favoris.component';
import { MeteoQaMessageComponent } from './meteo-qa-message/meteo-qa-message.component';
import { MeteoQaRubriqueComponent } from './meteo-qa-rubrique/meteo-qa-rubrique.component';
import { MeteoQaFilDeDiscussionComponent } from './meteo-qa-fil-de-discussion/meteo-qa-fil-de-discussion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeteoQaAccueilComponent,
    MeteoQaLoginComponent,
    MeteoQaInscriptionComponent,
    MeteoQaCompteComponent,
    MeteoQaFavorisComponent,
    MeteoQaMessageComponent,
    MeteoQaRubriqueComponent,
    MeteoQaFilDeDiscussionComponent,

  ],
  exports:[
    MeteoQaAccueilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MeteoQaModule { }
