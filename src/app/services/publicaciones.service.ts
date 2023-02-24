import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SavePubliInterface} from "../modelos/SavePubliModel/savePubli.interface"
import {ResponseSavePubliInterface} from "../modelos/SavePubliModel/responseSavePubli.interface"
import {Observable} from "rxjs";
import {ReponseInterface} from "../modelos/LoginModel/reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:');
  }

  url:string = "http://127.0.0.1:8000/api/";

  getPublicaciones(): any{
    return this.http.get('http://127.0.0.1:8000/api/publicaciones/list' );
  }

  savePublicacion(form:SavePubliInterface): Observable<ResponseSavePubliInterface>{
    let direccion = this.url + "publicaciones/save";
    let token = "";
    token = localStorage.getItem('token')!;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'token': token
    })
    return this.http.post<ResponseSavePubliInterface>(direccion, form, {headers:httpHeaders});
  }
}
