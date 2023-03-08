import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseSaveProtectoraInterface} from "../modelos/ProtectoraModel/responseSaveProtectora.interface"
import {SaveProtectoraInerface} from "../modelos/ProtectoraModel/saveProtectora.inerface";
import {ResponseDeleteProtectoraInterface} from "../modelos/ProtectoraModel/responseDeleteProtectora.interface";


@Injectable({
  providedIn: 'root'
})

export class ProtectoraService{
  constructor(private http: HttpClient) {

    console.log('Servicio HTTP:');
  }

  serProtectora(form:SaveProtectoraInerface): Observable<ResponseSaveProtectoraInterface>{
    let direccion = "http://127.0.0.1:8000/api/usuario/saveProtectora";
    let token = "";
    token = localStorage.getItem('token')!;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'token': token
    });
    return this.http.post<ResponseSaveProtectoraInterface>(direccion, form, {headers:httpHeaders});
  }

  deleteProtectora(): Observable<ResponseDeleteProtectoraInterface>{
    let direccion = "http://127.0.0.1:8000/api/asociacion/deleteProtectora";
    let token = "";
    token = localStorage.getItem('token')!;
    console.log(token);
    const httpHeaders = new HttpHeaders({
      'token': token
    });
    return this.http.delete<ResponseDeleteProtectoraInterface>(direccion,{headers:httpHeaders});
  }
}
