import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito: Object[] = [];
  total:number = 0;

  constructor(private httpservice : HttpService,
              private router: Router ) {

    this.httpservice.getCheck_login();
  }

  ngOnInit() {
  	this.carrito = this.httpservice.leer_Carrito();

  	this.carrito.forEach(items => {
  	  	this.total = this.total + parseFloat(items["subtotal"]);
  	})

  }

  pagar_carrito(){

    this.httpservice.limpiar_Carrito();  
    this.router.navigate(['/catalogo']);
  }


}
