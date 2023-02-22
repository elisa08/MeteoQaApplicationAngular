import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoQaAuthService } from '../services/meteo-qa-auth.service';

@Component({
  selector: 'app-meteo-qa-compte',
  templateUrl: './meteo-qa-compte.component.html',
  styleUrls: ['./meteo-qa-compte.component.css']
})
export class MeteoQaCompteComponent implements OnInit {

  isLogged=true;
  userConnectedDetail:any=[];
  userInfo!:any;
  singleUser!:any;

  constructor(private router : Router, private serviceAuth : MeteoQaAuthService) { }

  ngOnInit(): void {

    this.userConnectedDetail= localStorage.getItem("login");
    console.log(this.userConnectedDetail);
    this.getUserByLogin(this.userConnectedDetail);
    // if(this.serviceAuth.isConnected()===false){

    //   this.router.navigate(["meteo-qa-login"]);

    // }
  }

  getUserByLogin(login:string){

    this.serviceAuth.getUserByUsername(login).subscribe(
      (callback) => {
        this.userInfo= callback;
        console.log(this.userInfo);
       this.userInfo.forEach((element: { username: string; }) => {
        if(element.username===login){
          this.singleUser= element;
        }
       }
       );

       console.log(this.singleUser);

      },
      (error) => {

      }
    );

  }
}
