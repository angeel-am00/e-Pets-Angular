import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {listausuarios} from "../modelos/listausuarios.interface";

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
    let direccion = 'http://127.0.0.1:8000/api/usuario/verPerfil' + "?idUser=" +id;
    return this.http.get<listausuarios>(direccion);
  }
}
