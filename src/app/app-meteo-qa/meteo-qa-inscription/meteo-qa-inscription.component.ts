import { Component, OnInit } from '@angular/core';
import { MeteoQaAuthService } from '../services/meteo-qa-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meteo-qa-inscription',
  templateUrl: './meteo-qa-inscription.component.html',
  styleUrls: ['./meteo-qa-inscription.component.css']
})
export class MeteoQaInscriptionComponent implements OnInit {

  formRegister!:FormGroup;

  constructor(private serviceAuth:MeteoQaAuthService, private builder:FormBuilder, private router : Router) {
    this.formRegister = this.builder.group({

      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],


    });
  }

  ngOnInit(): void {



  }

  registerUser(){
    const dataUser= this.formRegister.value;

    this.serviceAuth.addUser(dataUser).subscribe(
      (callback) => {
        console.log(callback);

        const dataToConnect= {
          login: dataUser.username,
          password: dataUser.password
        }

        this.serviceAuth.loginUser(dataToConnect).subscribe(
          (callback) => {
            console.log(callback.access_token);

            localStorage.setItem("token",callback.access_token);
            localStorage.setItem("login",dataToConnect.login);

            this.router.navigate(["meteo-qa-compte"]);
            this.formRegister.reset();

          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );


  }


}
