import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegistroInterface} from '../modelos/registro.interface';
import {ResponseRegistroInterface} from '../modelos/responseRegistro.interface';
import {Observable} from 'rxjs'
import {ReponseInterface} from "../modelos/reponse.interface";



@Injectable({
  providedIn: 'root'
})

export class RegistroService{
  url:string = "http://127.0.0.1:8000/api/";

  constructor(public http: HttpClient) {}

  registerUser(form:RegistroInterface):Observable<ResponseRegistroInterface>{
    let direccion = this.url + "usuario/save";
    return this.http.post<ReponseInterface>(direccion, form);
  }
}
