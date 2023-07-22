import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {
 @Input()
  pedidos;
ngOnInit(): void {
}

}
