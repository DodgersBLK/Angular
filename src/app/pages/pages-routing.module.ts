import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ListadoPedidosComponent } from './pedidos/listado-pedidos/listado-pedidos.component';
import { AddPedidosComponent } from './pedidos/add-pedidos/add-pedidos.component';



const routes:Routes=[
  {path:'', component:PagesComponent,
children:[
  {path:'', component:DashboardComponent, data:{titulo:'Dashboard'}},
  {path:'dashboard', component:DashboardComponent, data:{titulo:'Dashboard'}},
  {path:'pedidos',component:PedidosComponent, data:{titulo:'Pedidos'}},
  {path:'pedidos/listadopedidos',component:ListadoPedidosComponent, data:{titulo:'Todos Los Pedidos'}},
  {path:'pedidos/addpedido',component:AddPedidosComponent, data:{titulo:'Agregar Pedido'}},
  {path:'contratos',component:ContratosComponent, data:{titulo:'Contratos'}}
]
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class PagesRoutingModule { }
