import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeteoQaAuthService } from '../services/meteo-qa-auth.service';

@Component({
  selector: 'app-meteo-qa-login',
  templateUrl: './meteo-qa-login.component.html',
  styleUrls: ['./meteo-qa-login.component.css']
})
export class MeteoQaLoginComponent implements OnInit {

  formLogin!:FormGroup;
  userConnectedDetail:any=[];

  constructor(private service : MeteoQaAuthService, private builder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.formLogin = this.builder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });

    if(this.service.isConnected()){

      this.router.navigate(["meteo-qa-compte"]);

    }

  }
  loginUser(){

    const dataUser= this.formLogin.value;
    // console.log(dataUser);





    this.service.loginUser(dataUser).subscribe(
      (callback) => {
        console.log(callback.access_token);

        localStorage.setItem("token",callback.access_token);
        this.router.navigate(["meteo-qa-compte"]);
        this.formLogin.reset();
        return false;
      },
      (error) => {}
    );
  }
}
