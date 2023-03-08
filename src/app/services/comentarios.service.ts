import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ResponseSaveComenInterface} from "../modelos/ComentariosModel/responseSaveComen.interface";
import {SaveComenInterface} from "../modelos/ComentariosModel/saveComen.interface";

@Injectable({
  providedIn: 'root'
})

export class ComentariosService{

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:');
  }

  url:string = "http://127.0.0.1:8000/api/";

  saveComentario(form:SaveComenInterface, idPub:any){
    let direccion = this.url + "comentarios/saveComen?idPub=" + idPub;
    console.log(direccion);
    let token =  "";
    token = localStorage.getItem('token')!;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'token' : token
    });
    return this.http.post<ResponseSaveComenInterface>(direccion, form, {headers:httpHeaders});
  }

}
