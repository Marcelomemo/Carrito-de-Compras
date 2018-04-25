
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class HttpService {

  login: boolean = false;
  usuario: string = '';
  producto: any = [];
  carrito: any = [];
  cantidad: number = 0;

  constructor(private http : Http,
  			  private router: Router) { }

  getDatos(){
  	return this.http.get('https://catalogo-dbe32.firebaseio.com/productos.json')
  	  .map((response: Response)=>response.json())
  }

  getCheck_login(){
    if(this.login == false){
      this.router.navigate(['/login']);
    }
    
  }

  getLogin(user){

    return this.http.get('https://catalogo-dbe32.firebaseio.com/usuarios/' + user + '.json')
      .map((response: Response)=>response.json())
  }

  getValidar_login(form:any){
    let datos :any 
    
    let promesa = new Promise(( resolve, reject)=> {
      this.getLogin(form.value["usuario"])
        .subscribe(
          (data) => {
            if(data['password'] == form.value["password"] ){
              this.login = true;
              this.usuario = data['nombre'];
            }
            resolve(this.login);
        }
      )
    });

    return promesa;

  }

  getLogout(){
  	this.login = false;
    this.usuario = '';
    this.router.navigate(['/login']);

  }


  grabar_Producto(data:any){
    this.producto = data;
  }


  leer_Producto(){
    return this.producto;
  }

  limpiar_Carrito(){
     this.carrito = [];
     this.cantidad = 0;
  }

  grabar_Carrito(data:any){
    this.carrito.push(data);
    this.cantidad = this.carrito.length;
  }

  leer_Carrito(){
    return this.carrito;
  }


}
