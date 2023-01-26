import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commune } from '../models/Commune';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaCommuneService {

  url="http://localhost:9090/communes";
  constructor(private http:HttpClient) { }
  options= {headers:new HttpHeaders({"Access-Control-Allow-Origin":"*"})}

  getCommuneByLongitudeLatitude(c:Commune): Observable<Commune>{

    let result= this.http.get<Commune>(this.url+"/lat="+c.lat+"&long="+c.lon,this.options);
    console.log(result);
    return result;

  }
  getCommune(){
    return this.http.get(this.url);
  }


}
