import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {listausuarios, nuevaLista} from "../modelos/listausuarios.interface";
import {Observable} from "rxjs";
import {SavePubliInterface} from "../modelos/SavePubliModel/savePubli.interface";
import {ResponseSavePubliInterface} from "../modelos/SavePubliModel/responseSavePubli.interface";
import {editarPerfilForm} from "../modelos/editarPerfilForm";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

    console.log('Servicio HTTP:');
  }
  url:string = "http://127.0.0.1:8000/api/";
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

  editarPerfil(form:editarPerfilForm): Observable<ResponseSavePubliInterface>{
    let direccion = this.url + "usuario/editarPerfil";
    let token = "";
    token = localStorage.getItem('token')!;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'token': token
    })
    return this.http.put<ResponseSavePubliInterface>(direccion, form, {headers:httpHeaders});
  }
}
