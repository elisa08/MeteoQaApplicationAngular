import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Indicateur } from '../models/Indicateurs';
import { Meteo } from '../models/Meteo';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaIndicateurService {


  constructor(private http:HttpClient, private serviceConfig:ConfigService) { }

  getIndicateurBylatitudeAndLongitude(lat : string, lon : string): Observable<Indicateur> {

    /** GET hero by id. Will 404 if id not found */

    const url =this.serviceConfig.url+"/indicateurs"+"/lat="+lat+"&long="+lon;

    return this.http.get<Indicateur>(url,this.serviceConfig.httpOptions).pipe(

    tap(data => console.log(data)), catchError(this.handleError<Indicateur>("indicateur introuvable"))

    );

  }
 // MANQUE LE POST +
 //actualisation des données puisque le favori permet de recevoir les mêmes données météo qualité de l'air


  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);

    };

  }

}
