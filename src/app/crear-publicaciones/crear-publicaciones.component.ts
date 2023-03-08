import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PublicacionesService} from "../services/publicaciones.service";
import {ResponseSavePubliInterface} from '../modelos/SavePubliModel/responseSavePubli.interface';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReponseInterface} from "../modelos/LoginModel/reponse.interface";
import {faHouse, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-crear-publicaciones',
  templateUrl: './crear-publicaciones.component.html',
  styleUrls: ['./crear-publicaciones.component.css']
})
export class CrearPublicacionesComponent implements OnInit {

  crearPubForm = new FormGroup({
    cuerpo: new FormControl('', Validators.required),
    imagen: new FormControl('')
  })

  constructor(private router: Router, private PublicacionesService: PublicacionesService) {
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

  errorStatus: boolean = false;
  errorMsg: any = "";

  ngOnInit() {
  }

  savePub(form: any) {
    console.log(form);
    this.PublicacionesService.savePublicacion(form).subscribe(data => {
      let dataResponse: ResponseSavePubliInterface = data;
      if (dataResponse.prohibido) {
        console.log(dataResponse.prohibido);
        window.location.reload();
      } else if (dataResponse.error) {
        console.log(dataResponse.error);
        window.location.reload()
      } else {
        console.log(dataResponse.message);
        this.router.navigate(['home']);
      }
    });
  }
}
