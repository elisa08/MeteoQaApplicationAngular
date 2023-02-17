import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,of, tap } from 'rxjs';
import { Meteo } from '../models/Meteo';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaApiService {

  constructor(private http : HttpClient, private config : ConfigService) {

   }

  getMeteoBylatitudeAndLongitude(lat : string, lon : string): Observable<Meteo> {

    /** GET hero by id. Will 404 if id not found */


    const url =this.config.url+"/meteos"+"/lat="+lat+"&long="+lon;

    return this.http.get<Meteo>(url,this.config.httpOptions).pipe(

    tap(_ => console.log("erreur")), catchError(this.handleError<Meteo>("météo introuvable"))



   );
  }

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
