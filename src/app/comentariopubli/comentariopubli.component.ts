import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
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
  selector: 'app-comentariopubli',
  templateUrl: './comentariopubli.component.html',
  styleUrls: ['./comentariopubli.component.css']
})
export class ComentariopubliComponent {
  constructor(private router:Router) {
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
  serprotectora(){
    this.router.navigate(["serprotectora"])
  }

  ruta6(){
    this.router.navigate(["editarperfil"])
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

  faArrowLeft = faArrowLeft
}
