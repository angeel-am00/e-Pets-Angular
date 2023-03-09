import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {listatag} from "../modelos/listatag.interface";
import {Observable} from "rxjs";
import {nuevaLista} from "../modelos/listausuarios.interface";
import {SaveTagsInterface} from "../modelos/TagsModel/saveTags.interface";
import {ResponseSaveTagsInterface} from "../modelos/TagsModel/responseSaveTags.interface";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {

    console.log('Servicio HTTP:');
  }

  getTag(): any{
    return this.http.get('http://127.0.0.1:8000/api/tags/listar' );
  }

  saveTag(form:SaveTagsInterface, idPub:any):Observable<ResponseSaveTagsInterface>{
    let direccion = "http://127.0.0.1:8000/api/tags/save?idPub=" + idPub;
    return this.http.post<ResponseSaveTagsInterface>(direccion, form)
  }
}
