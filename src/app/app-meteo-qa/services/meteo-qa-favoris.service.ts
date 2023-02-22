import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoQaFavorisService {

  constructor(private http:HttpClient, private serviceConfig:ConfigService) { }

  addToFavorite(favori:any){

    const url = `${this.serviceConfig.url}/favoris/creer`;
    return this.http.post<any>(url,{favori}, this.serviceConfig.httpOptions).pipe(take(1));

  }

  getFavoriUserId(){

    const url = `${this.serviceConfig.url}/favoris`;
    return this.http.post<any>(url,  this.serviceConfig.httpOptions).pipe(take(1));

  }

}
