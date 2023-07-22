import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[{
    titulo:'Dashboard',
    icono:'nav-icon fas fa-tachometer-alt',
    url:'#',
    submenu:[{
      titulo: 'Dashboard',
      icono:'nav-icon fas fa-tachometer-alt',
      url:'dashboard'
    }    
  ]},
  {
    titulo:'Pedidos',
    url:'pedidos',
    icono:'fa fa-cubes'
  },
  {
    titulo:'Contratos',
    url:'contratos',
    icono:'fas fa-file-signature'
  }
]
}
