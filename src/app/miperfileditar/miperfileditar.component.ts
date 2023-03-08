import {Component} from '@angular/core';
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
import {UsersService} from "../services/users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponseSavePubliInterface} from "../modelos/SavePubliModel/responseSavePubli.interface";

@Component({
  selector: 'app-miperfileditar',
  templateUrl: './miperfileditar.component.html',
  styleUrls: ['./miperfileditar.component.css']
})
export class MiperfileditarComponent {
  editarPerfilForm = new FormGroup({
    username: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    imagen: new FormControl('')
  })

  constructor(private router: Router, private UserService: UsersService) {
  }

  user() {
    this.router.navigate(["users"])
  }

  protectora() {
    this.router.navigate(["protectora"])
  }

  home() {
    this.router.navigate(["home"])
  }

  miperfil() {
    this.router.navigate(["miperfil"])
  }

  ruta() {
    this.router.navigate(["users"])
  }

  ruta2() {
    this.router.navigate(["protectora"])
  }

  ruta3() {
    this.router.navigate(["perfilusers"])
  }

  ruta4() {
    this.router.navigate(["home"])
  }

  logout() {
    this.router.navigate(['logout'])
  }

  crear() {
    this.router.navigate(['crearPub'])
  }

  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen = faDoorOpen;

  faUserPen = faUserPen;
  faMagnifyingGlass = faMagnifyingGlass;

  faCheck = faCheck;

  faTimes = faTimes;

  faPenSquare = faPencil;
  faArrowLeft = faArrowLeft;
  faPaperplane = faPaperPlane;

  editarPerfil(form: any) {
    this.UserService.editarPerfil(form).subscribe(data => {
      let dataResponse: ResponseSavePubliInterface = data;
      if (dataResponse.prohibido) {
        console.log(dataResponse.prohibido);
        this.router.navigate(['editarperfil']);
      } else if (dataResponse.error) {
        console.log(dataResponse.error);
        this.router.navigate(['editarperfil']);
      } else {
        console.log(dataResponse.message);
        this.router.navigate(['miperfil']);
      }
    });
  }
}
