import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {faHouse} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faHouse = faHouse;
  constructor(private router:Router) {
  }

  ruta(){
    this.router.navigate(["login"])
  }

  registro(){
    this.router.navigate(["registro"])
  }
}
