import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContratosComponent } from './contratos/contratos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListadoPedidosComponent } from './pedidos/listado-pedidos/listado-pedidos.component';
import { AddPedidosComponent } from './pedidos/add-pedidos/add-pedidos.component';
import { EditPedidosComponent } from './pedidos/edit-pedidos/edit-pedidos.component';
import { EditContratoComponent } from './contratos/edit-contrato/edit-contrato.component';
import { AddContratoComponent } from './contratos/add-contrato/add-contrato.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {AutorizadoComponent} from '../seguridad/autorizado/autorizado.component';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PedidosComponent,
    ContratosComponent,
    PagesComponent,
    ListadoPedidosComponent,
    AddPedidosComponent,
    EditPedidosComponent,
    EditContratoComponent,
    AddContratoComponent,
    MostrarErroresComponent,
    ListadoGenericoComponent,
    AutorizadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SweetAlert2Module.forRoot()
  ],
  exports:[
    DashboardComponent,
    PedidosComponent,
    ContratosComponent
  ]
})
export class PagesModule { }
