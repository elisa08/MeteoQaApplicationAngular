import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url="http://localhost:9090";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}`
  })};
  constructor() { }

  logout(){

    localStorage.removeItem("token");

  }
}
