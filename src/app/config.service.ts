import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url="http://localhost:9090";
  constructor() { }
}
