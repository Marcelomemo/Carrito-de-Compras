import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err:string = '';

  constructor(private httpservice: HttpService,
              private router: Router ) { }

  ngOnInit() {

  }

  resultado( form ){

    this.err = '';
    this.httpservice.getValidar_login(form)
      .then(valido =>{
        if (valido){
          this.router.navigate(['/catalogo']);
        }else{
          this.err = " El Usuario o contraseña son incorrectos";

        }
      })
      .catch(error =>{
        this.err = " Error de conexión con la base de datos";
      });
      

  }


}
