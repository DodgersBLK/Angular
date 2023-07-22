import { Injectable } from '@angular/core';
import { editaCantidadDTO, pedidoDTO, propuestaDTO } from './pedidos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http:HttpClient) { }

  private apiURL = environment.apiURL;
  public obtenerTodos(pagina:number,cantidadRegistrosAMostrar: number, estatus:string): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());
    params = params.append('estatus',estatus.toString());
    return this.http.get<pedidoDTO[]>(this.apiURL+'pedidos',{observe: 'response', params});
  }
  public obtenerPropuesta(pagina: number ,cantidadRegistrosAMostrar: number,compania: number):Observable<any>{
    let params = new HttpParams();

    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina',cantidadRegistrosAMostrar.toString());
    params = params.append('compania', compania.toString());

    return this.http.get<propuestaDTO[]>(this.apiURL+"propuestas",{observe: 'response',params});
  }
  public nuevaPropuesta(compania: number){
    return this.http.post(this.apiURL+"propuestas", compania);
  }

  public borrar(id:number, compania:number){
    return this.http.delete(`${this.apiURL+"propuestas"}/${id}/${compania}`);
  }

  public editarCantidadPropuesta(id:number, propuesta:editaCantidadDTO){
    return this.http.put(`${this.apiURL+"propuestas"}/${id}`, propuesta);
  }
}
