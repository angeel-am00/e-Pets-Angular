import { Component } from '@angular/core';
import {faHouse, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProtectoraService} from "../services/protectora.service";
import {ResponseSaveProtectoraInterface} from "../modelos/ProtectoraModel/responseSaveProtectora.interface";

@Component({
  selector: 'app-serprotectora',
  templateUrl: './serprotectora.component.html',
  styleUrls: ['./serprotectora.component.css']
})
export class SerprotectoraComponent {

  serProtectoraForm = new FormGroup({
    direccion: new FormControl('', Validators.required),
    capacidad: new FormControl('', Validators.required),
    logo: new FormControl('')
  })

  constructor(private router:Router, private protectoraService:ProtectoraService) {
  }

  serProtectora(form:any){
    console.log(form);
    this.protectoraService.serProtectora(form).subscribe(data =>{
      let dataResponse : ResponseSaveProtectoraInterface = data;
      if(dataResponse.error){
        console.log(dataResponse.error);
      }else {
        this.router.navigate(['miperfil']);
      }
    })
  }
  user(){
    this.router.navigate(["users"])
  }
  protectora(){
    this.router.navigate(["protectora"])
  }
  home(){
    this.router.navigate(["home"])
  }

  miperfil(){
    this.router.navigate(["miperfil"])
  }
  ruta(){
    this.router.navigate(["users"])
  }
  ruta2(){
    this.router.navigate(["protectora"])
  }
  ruta3(){
    this.router.navigate(["perfilusers"])
  }
  ruta4(){
    this.router.navigate(["home"])
  }
  logout(){
    this.router.navigate(['logout'])
  }
  crear(){
    this.router.navigate(['crearPub'])
  }
  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen= faDoorOpen;

  faUserPen = faUserPen;
  faMagnifyingGlass= faMagnifyingGlass;

  faCheck=faCheck;

  faTimes = faTimes;

  faPenSquare=faPencil;
  faArrowLeft=faArrowLeft;

  faPaperplane=faPaperPlane;

}

