import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commune } from '../models/Commune';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { map, take } from 'rxjs/operators';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})

export class MeteoQaAuthService {
  headers = new HttpHeaders();
  constructor(private http:HttpClient, private serviceConfig:ConfigService ){
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  addUser(data:User): Observable<User>{

    const url = `${this.serviceConfig.url}/users/creer`;
    return this.http.post<User>(url, { ...data }, this.serviceConfig.httpOptions).pipe(take(1));

  }

  loginUser(data:any): Observable<any>{

    const url = `${this.serviceConfig.url}/auth`;
    return this.http.post<any>(url, { ...data }, { headers: this.headers }).pipe(take(1));

  }

  getUserByUsername(username:string){

    const url = `${this.serviceConfig.url}/users/?${username}`;
    return this.http.get<any>(url,  this.serviceConfig.httpOptions).pipe(take(1));

  }

  isConnected(){

    let isConnected= false;

    if(localStorage.getItem("userConnected")){

      isConnected= true;

    }

    return isConnected;

  }
}
