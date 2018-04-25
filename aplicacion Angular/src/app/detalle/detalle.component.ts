import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  
  producto: Object = [];

  constructor(private httpservice : HttpService,
              private router: Router) { 

    this.httpservice.getCheck_login();
    
  }

  ngOnInit() {

    this.producto = this.httpservice.leer_Producto()
    if ( this.producto == 0 ){
      this.router.navigate(['/catalogo']);
    }

  }

}
