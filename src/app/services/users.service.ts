import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {listausuarios, nuevaLista} from "../modelos/listausuarios.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

    console.log('Servicio HTTP:');
  }

  getUsers(): any{
    return this.http.get('http://127.0.0.1:8000/api/usuario/list' );
  }

  getSingleUser(id:any):Observable<listausuarios>{
    let direccion = 'http://127.0.0.1:8000/api/usuario/verPerfil' + "?idUser=" +id;
    return this.http.get<listausuarios>(direccion);
  }
  buscarUser(username:any):Observable<nuevaLista>{
    let direccion = 'http://127.0.0.1:8000/api/buscador/username' + "?username=" +username;
    return this.http.get<nuevaLista>(direccion);
  }
}
