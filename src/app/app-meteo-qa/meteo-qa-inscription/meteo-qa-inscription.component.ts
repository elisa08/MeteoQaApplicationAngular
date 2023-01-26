import { Component, OnInit } from '@angular/core';
import { MeteoQaAuthService } from '../services/meteo-qa-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/users';

@Component({
  selector: 'app-meteo-qa-inscription',
  templateUrl: './meteo-qa-inscription.component.html',
  styleUrls: ['./meteo-qa-inscription.component.css']
})
export class MeteoQaInscriptionComponent implements OnInit {

  formRegister!:FormGroup;

  userInfo={
    email:"",
    nom:"",
    prenom:"",
    motDePasse:""
  }
  constructor(private serviceAuth:MeteoQaAuthService, private builder:FormBuilder) {
    this.formRegister = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {



  }

  registerUser(){
    const dataUser= this.formRegister.value;

    this.serviceAuth.addUser(dataUser).subscribe(
      (callback) => {
        console.log(callback)
        this.formRegister.reset();
      },
      (error) => {}
    );
  }


}
