import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { parsearErroresAPI } from '../utilidades/utilidades';
import { pedidoDTO } from './pedidos';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  constructor(private pedidosService: PedidosService){}
  
  errores: string[]=[];
  //Todos los Pedidos
  pedidos: pedidoDTO[];
  cantidadTotalRegistros;
  cantidadRegistrosAMostrar=10;
  paginaActual = 1;

  //Pedidos Pendientes
  pedidosPendientes: pedidoDTO[];
  cantidadTotalRegistrosPendientes;
  cantidadRegistrosAMostrarPendientes=10;
  paginaActualPendientes = 1;

  colmnasAMostrar=['id','fecha','estatus','ordenSuministro'];
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    this.cargarRegistrosPendientes(this.paginaActualPendientes, this.cantidadRegistrosAMostrarPendientes);
  }
  cargarRegistros(pagina:number, cantidadRegistrosAMostrar){
    this.pedidosService.obtenerTodos(pagina,cantidadRegistrosAMostrar,"T")
    .subscribe((respuesta: HttpResponse<pedidoDTO[]>) => {
      this.pedidos = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    });
  }
  actualizarPaginacion(datos: PageEvent){
    this.paginaActual=datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
    this.table.renderRows();
  }

  cargarRegistrosPendientes(pagina:number, cantidadRegistrosAMostrar){
    this.pedidosService.obtenerTodos(pagina,cantidadRegistrosAMostrar,"P")
    .subscribe((respuesta: HttpResponse<pedidoDTO[]>) => {
      this.pedidosPendientes = respuesta.body;
      this.cantidadTotalRegistrosPendientes = respuesta.headers.get("cantidadTotalRegistros");
    });
  }
  actualizarPaginacionPendientes(datos: PageEvent){
    this.paginaActualPendientes=datos.pageIndex + 1;
    this.cantidadRegistrosAMostrarPendientes = datos.pageSize;
    this.cargarRegistrosPendientes(this.paginaActualPendientes,this.cantidadRegistrosAMostrarPendientes);
    this.table.renderRows();
  }
 
}
