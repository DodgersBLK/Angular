import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidosService } from '../pedidos.service';
import { editaCantidadDTO, propuestaDTO } from '../pedidos';
import { HttpResponse } from '@angular/common/http';
import { MatTable } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { parsearErroresAPI } from '../../utilidades/utilidades';


import Swal from 'sweetalert2';
import { TYPE } from '../../utilidades/utilidades';

@Component({
  selector: 'app-add-pedidos',
  templateUrl: './add-pedidos.component.html',
  styleUrls: ['./add-pedidos.component.css']
})
export class AddPedidosComponent implements OnInit {  
    constructor(private router:Router, private pedidosService: PedidosService, private formBuilder:FormBuilder)
    {
        
    }
    form: FormGroup;

    errores:string[]=[];
    modeloEditDTO: editaCantidadDTO;

  propuesta:propuestaDTO[];
  cantidadTotalRegistros;
  cantidadRegistrosAMostrar=10;
  paginaActual = 1;
  @ViewChild(MatTable) table: MatTable<any>;
  columnasAMostrar=["clave","medicamento","existAlmacen","existFarm","contrato","cantidadPedir","remanente","acciones"];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cantidadAPedir: ['',{validators: [Validators.required]}]
    });
    this.UltimaProuesta(this.paginaActual,this.cantidadRegistrosAMostrar);
  }
  GenerarPropuesta(){
   
   this.pedidosService.nuevaPropuesta(10).subscribe(()=>{
    this.UltimaProuesta(this.paginaActual,this.cantidadRegistrosAMostrar);
   });
  }

  UltimaProuesta(pagina:number, cantidadRegistrosAMostrar){
    this.pedidosService.obtenerPropuesta(pagina,cantidadRegistrosAMostrar,10)
    .subscribe((respuesta: HttpResponse<propuestaDTO[]>) => {
        this.propuesta = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    },
    (error)=> this.errores = parsearErroresAPI(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual=datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.UltimaProuesta(this.paginaActual,this.cantidadRegistrosAMostrar);
    this.table.renderRows();
  }
  guardar(element: any, cantPedir: number) {
    if(cantPedir <= element.remanente){
      let propEdit: editaCantidadDTO;
      propEdit = {id:element.id, compania: element.compania, cantidaD_PEDIR: cantPedir};
      //console.log(cantPedir);
      //this.modeloEditDTO = new {id: element.}
      //this.modeloEditDTO.compania=element.compania;
      //this.modeloEditDTO.cantidaD_PEDIR=cantPedir;
      //console.log(this.modeloEditDTO);
      this.pedidosService.editarCantidadPropuesta(element.id,propEdit)
      .subscribe(() => {
        this.toast(TYPE.SUCCESS,"Registro modificado correctamente","Notificación");
      }, error => this.toast(TYPE.ERROR,"Hubo un error al querer modificar el registro.","Alerta"));
    }else{
      console.log(`No se puede modificar ${cantPedir}`);
      this.toast(TYPE.ERROR,"No guardará cantidades superiores a los remanentes","Alerta");
    }
      
  }

  borrar(id: number){
    this.pedidosService.borrar(id,10).subscribe(()=>{
      this.UltimaProuesta(this.paginaActual,this.cantidadRegistrosAMostrar);
      this.toast(TYPE.SUCCESS,'Registro eliminado con éxito','Notificación');
    }, error => console.error(error));
  }

  toastConfirm(typeIcon = TYPE.SUCCESS, texto: string, titulo:string, element: any) {
    Swal.fire({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      showCancelButton:true,
      icon: typeIcon,
      title: titulo,
      text:texto + ' ' + element.medicamento
      .toString(),
      preConfirm: () => {
        this.borrar(element.id);
      }
    });
  }
  toast(typeIcon = TYPE.SUCCESS, texto: string, titulo:string) {
    Swal.fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      showCancelButton:false,
      icon: typeIcon,
      timerProgressBar: true,
      timer: 5000,
      title: titulo,
      text:texto
    });
  }
  toastConfirmNuevaPropuesta( texto: string, titulo:string) {
    Swal.fire({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      showCancelButton:true,
      icon: TYPE.QUESTION,
      title: titulo,
      text:texto
      .toString(),
      preConfirm: () => {
        this.GenerarPropuesta();
      }
    });
  }
}
