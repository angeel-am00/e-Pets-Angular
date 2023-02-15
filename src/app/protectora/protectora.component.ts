import {Component, OnInit} from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {ProtectorasService} from "../services/protectoras.service";

@Component({
  selector: 'app-protectora',
  templateUrl: './protectora.component.html',
  styleUrls: ['./protectora.component.css']
})
export class ProtectoraComponent implements OnInit {
  constructor(private router:Router,private protectorasService: ProtectorasService) {
  }
  protectorasList: any = [];
  ruta(){
    this.router.navigate(["users"])
  }
  ruta2(){
    this.router.navigate(["protectora"])
  }
  ruta3(){
    this.router.navigate(["perfilprotectora"])
  }
  ruta4(){
    this.router.navigate(["home"])
  }
  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen= faDoorOpen;

  faUserPen = faUserPen;
  faMagnifyingGlass= faMagnifyingGlass;


  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.protectorasService.getProtectoras()
      .subscribe((response: any) => this.protectorasList=response);
  }
}
