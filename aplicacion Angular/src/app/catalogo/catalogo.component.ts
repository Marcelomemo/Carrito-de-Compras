import { Component, OnInit, ViewChild, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpService } from '../http.service';
import 'rxjs/Rx';

import { Router } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  @ViewChild('search')
  search: ElementRef;

  private productos: Object[] = [];

  constructor(private httpservice: HttpService,
              private router: Router) { 
    this.httpservice.getCheck_login();
    this.getProductos();
  }

  ngOnInit() {
    let eventObservable = Observable.fromEvent(this.search.nativeElement, 'keyup')
    eventObservable.subscribe();
  }

  producto_carrito(titulo:string, cantidad:number){

    this.productos.forEach(items => {
      if(items["titulo"] == titulo){

        let producto: any = {
          'titulo': items['titulo'],
          'img': items['img'],
          'subtotal': items['precio'] * cantidad,
          'cantidad': cantidad
        };
        items['cantidad'] = String(parseInt(items['cantidad']) - cantidad);
        this.httpservice.grabar_Carrito(producto);
      }
    })    

  }


  detalleProducto(titulo:string){

    this.productos.forEach(element => {
      if(element["titulo"] == titulo){
        this.httpservice.grabar_Producto(element);
      }
    })

    this.router.navigate(['/detalle']);

  }


  getProductos(){
    this.httpservice.getDatos()
      .subscribe(
        (data) => {
        this.productos=data
      }
    )
  }

}


@Pipe({
  name: 'filtroPoducto'
})

export class filtroPoducto implements PipeTransform {
  transform(productos: any[], searchTerm: string): any[] {
    searchTerm = searchTerm.toUpperCase();
    return productos.filter(item => {
      return item.titulo.toUpperCase().indexOf(searchTerm) !== -1 
    });
  }
}