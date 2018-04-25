import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../http.service';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private httpservice: HttpService) { }

  ngOnInit() {

  }

  logout(){
  	this.httpservice.getLogout();
    console.log('Salir del sistema');
  }



}
