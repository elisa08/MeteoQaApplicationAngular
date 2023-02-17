import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, of } from 'rxjs';
import { Commune } from '../models/Commune';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaCommuneService {

  // meteoQatoken:string|null=  ;



  url="http://localhost:9090/communes";
  constructor(private http:HttpClient, private serviceConfig:ConfigService) { }
  // options= {headers:new HttpHeaders({})}
//   options = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + this.meteoQaToken
//  });

  // getCommuneByLongitudeLatitude(c:Commune): Observable<Commune>{

  //   let result= this.http.get<Commune>(this.url+"/lat="+c.lat+"&long="+c.lon,this.options);
  //   console.log(result);
  //   return result;

  // }
  getCommune(){

    return this.http.get(this.url, this.serviceConfig.httpOptions);

  }

  getCommuneById(idCommune : number): Observable<Commune> {

    /** GET hero by id. Will 404 if id not found */


    const url = `${​this.url}/${idCommune}`;

    return this.http.get<Commune>(url,this.serviceConfig.httpOptions).pipe(

    tap(_ => console.log("erreur")), catchError(this.handleError<Commune>(`commune id=${idCommune}`))



   );




    //let result= this.http.get<Commune>(this.url+"/"+idCommune,this.options);
    //return result;

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
