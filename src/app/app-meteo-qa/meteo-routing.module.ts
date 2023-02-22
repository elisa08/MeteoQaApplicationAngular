import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoQaAffichageComponent } from '../meteo-qa-affichage/meteo-qa-affichage.component';
import { MeteoQaCommuneComponent } from '../meteo-qa-commune/meteo-qa-commune.component';
import { MeteoQaForumComponent } from '../meteo-qa-forum/meteo-qa-forum.component';
import { MeteoQaWidgetComponent } from '../meteo-qa-widget/meteo-qa-widget.component';
import { MeteoQaAccueilComponent } from './meteo-qa-accueil/meteo-qa-accueil.component';
import { MeteoQaCompteComponent } from './meteo-qa-compte/meteo-qa-compte.component';
import { MeteoQaFavorisComponent } from './meteo-qa-favoris/meteo-qa-favoris.component';
import { MeteoQaFilDeDiscussionComponent } from './meteo-qa-fil-de-discussion/meteo-qa-fil-de-discussion.component';
import { MeteoQaInscriptionComponent } from './meteo-qa-inscription/meteo-qa-inscription.component';
import { MeteoQaLoginComponent } from './meteo-qa-login/meteo-qa-login.component';
import { MeteoQaMessageComponent } from './meteo-qa-message/meteo-qa-message.component';
import { MeteoQaRubriqueComponent } from './meteo-qa-rubrique/meteo-qa-rubrique.component';

const routes: Routes = [
  {
    path:'',redirectTo:'meteo-qa-accueil',pathMatch:'full'
  },
  {
    path:'meteo-qa-accueil',component:MeteoQaAccueilComponent
  },
  {
    path:'meteo-qa-compte',component:MeteoQaCompteComponent
  },
  {
    path:'meteo-qa-favoris',component:MeteoQaFavorisComponent
  },
  {
    path:'meteo-qa-fil',component:MeteoQaFilDeDiscussionComponent
  },
  {
    path:'meteo-qa-login',component:MeteoQaLoginComponent
  },
  {
    path:'meteo-qa-inscription',component:MeteoQaInscriptionComponent
  },
  {
    path:'meteo-qa-message',component:MeteoQaMessageComponent
  },
  {
    path:'meteo-qa-rubrique',component:MeteoQaRubriqueComponent
  },
  {
    path:'meteo-qa-message',component:MeteoQaMessageComponent
  },
  {
    path:'meteo-qa-commune',component:MeteoQaCommuneComponent
  },
  {
    path:'meteo-qa-forum',component:MeteoQaForumComponent
  },
  {
    path:'meteo-qa-forum',component:MeteoQaAffichageComponent
  }, {
    path:'meteo-qa-forum',component:MeteoQaWidgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule { }
