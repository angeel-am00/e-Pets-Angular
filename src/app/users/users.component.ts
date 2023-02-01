import { Component } from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private router:Router) {
  }

  ruta(){
    this.router.navigate(["users"])
  }
  ruta2(){
    this.router.navigate(["protectora"])
  }

  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen= faDoorOpen;

  faUserPen = faUserPen;

  faMagnifyingGlass= faMagnifyingGlass;
}
