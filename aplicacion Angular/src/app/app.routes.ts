import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';


const app_routes: Routes = [

  { path: 'catalogo', component: CatalogoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'carrito', component: CarritoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const app_routing = RouterModule.forRoot(app_routes);
