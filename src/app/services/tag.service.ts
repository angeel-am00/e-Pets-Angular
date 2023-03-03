import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {listatag} from "../modelos/listatag.interface";
import {Observable} from "rxjs";
import {nuevaLista} from "../modelos/listausuarios.interface";

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

}
