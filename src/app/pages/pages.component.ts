import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad/seguridad.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  constructor(private seguridadService:SeguridadService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  estaAutorizado():boolean{
    return this.seguridadService.estaLogueado();
  }

}
