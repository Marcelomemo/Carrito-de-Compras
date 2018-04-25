import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';


// Rutas
import { app_routing } from './app.routes';

// Paginas web
import { MenubarComponent } from './menubar/menubar.component';
import { CatalogoComponent, filtroPoducto } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    CatalogoComponent,
    filtroPoducto,
    LoginComponent,
    DetalleComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
