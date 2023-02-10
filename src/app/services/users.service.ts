import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
}
