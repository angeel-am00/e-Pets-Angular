import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SavePubliInterface} from "../modelos/SavePubliModel/savePubli.interface";
import {ResponseSavePubliInterface} from "../modelos/SavePubliModel/responseSavePubli.interface";
import {Observable} from "rxjs";
import {ResponseLikesInterface} from "../modelos/LikesModel/responseLikes.interface";
import {ReponseInterface} from "../modelos/LoginModel/reponse.interface";
import {ListaPublicacionesInterface} from "../modelos/PublicacionesModel/listaPublicaciones.interface"
import {nuevaLista} from "../modelos/listausuarios.interface";
import {ResponseCambiarEstadoPubInterface} from "../modelos/CambiarEstadoPub/responseCambiarEstadoPub.interface";

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

  getPublicacionesAcabadas():Observable<any>{
    let direccion = this.url + "publicaciones/list/acabadas";
    let token = "";
    token = localStorage.getItem('token')!;
    const httpHeaders = new HttpHeaders({
      'token': token
    });
    return this.http.get<any>(direccion, {headers:httpHeaders});
  }

  cambiarEstadoPub(idPub:any): Observable<ResponseCambiarEstadoPubInterface>{
    let direccion = this.url + "publicaciones/cambiar?idPub=" + idPub;
    return this.http.put<ResponseCambiarEstadoPubInterface>(direccion, null);
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

  sumLikes(idPub:any):Observable<ResponseLikesInterface>{
    let direccion = this.url + "publicaciones/like?idPub=" + idPub;
    return this.http.put<ResponseSavePubliInterface>(direccion, idPub);
  }

  getSiglePublication(id:any){
    let direccion = this.url + "publicaciones/verPub?idPub=" + id;
    return this.http.get(direccion);
  }

  buscarTags(tag:any):Observable<nuevaLista>{
    let direccion = 'http://127.0.0.1:8000/api/publicaciones/buscarTag' + "?tag=" +tag;
    return this.http.get<nuevaLista>(direccion);
  }
}
