import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegistroService} from "../services/registro.service";
import {ResponseRegistroInterface} from '../modelos/RegistroModel/responseRegistro.interface';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReponseInterface} from "../modelos/LoginModel/reponse.interface";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  registroForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    imagen: new FormControl('https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0'),
    rol: new FormControl('ROLE_USER'),
  })

  constructor(private router:Router, private RegistroService:RegistroService) {
  }

  errorStatus:boolean = false;
  errorMsg:any = "";

  ruta(){
    this.router.navigate(["login"])
  }

  ngOnInit() {
  }

  registro(form:any){
    console.log(form);
    this.RegistroService.registerUser(form).subscribe(data=>{
      let dataResponse:ResponseRegistroInterface = data;
      if(dataResponse.message){
        console.log(dataResponse.message);
        this.router.navigate(['login']);
      }else {
        this.errorStatus = true;
        this.errorMsg = dataResponse.message;
        this.router.navigate(['registro']);
      }
    });
  }
}
