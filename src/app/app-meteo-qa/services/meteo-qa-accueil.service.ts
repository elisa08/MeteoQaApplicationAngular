import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indicateur } from '../models/Indicateurs';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaAccueilService {


  constructor(private http : HttpClient) { }
  options= {headers:new HttpHeaders({"Access-Control-Allow-Origin":"*"})}
  getMeteo(): Observable<Indicateur[]>{

    let result= this.http.get<Indicateur[]>("http://localhost:9090/indicateurs/lat=45.9608475114&long=5.3729257777", this.options);
    console.log(result);
    return result;

  }
}
