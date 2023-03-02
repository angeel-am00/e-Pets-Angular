import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInterface} from '../modelos/LoginModel/login.interface';
import {ReponseInterface} from '../modelos/LoginModel/reponse.interface';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://127.0.0.1:8000/api/";
  constructor(public http: HttpClient) {}

  loginUser(form:LoginInterface):Observable<ReponseInterface>{
    let direccion = this.url + "login";
    return this.http.post<ReponseInterface>(direccion, form);
  }

}
