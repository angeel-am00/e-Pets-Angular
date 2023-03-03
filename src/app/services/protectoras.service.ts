import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listausuarios, nuevaLista} from "../modelos/listausuarios.interface";

@Injectable({
  providedIn: 'root'
})
export class ProtectorasService {

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:');
  }

  getProtectoras(): any{
    return this.http.get('http://127.0.0.1:8000/api/asociacion/list' );
  }

  getSingleProtectora(id:any):Observable<listausuarios>{
    let direccion = 'http://127.0.0.1:8000/api/asociacion/verAsociacion' + "?idAsociacion=" +id;
    return this.http.get<listausuarios>(direccion);
  }
  buscarProtectora(username:any):Observable<nuevaLista>{
    let direccion = 'http://127.0.0.1:8000/api/buscador/asociacion' + "?username=" +username;
    return this.http.get<nuevaLista>(direccion);
  }
}
