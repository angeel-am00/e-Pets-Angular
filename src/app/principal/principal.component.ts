import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PublicacionesService} from "../services/publicaciones.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  publicacionesList: any = [];
  constructor(private router:Router, private publicacionesService: PublicacionesService) {
  }

  principal(){
    this.router.navigate(["principal"])
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
  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.publicacionesService.getPublicaciones()
      .subscribe((response :any)=> this.publicacionesList=response);
  }
}
