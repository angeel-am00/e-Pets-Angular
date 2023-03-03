import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PublicacionesService} from "../services/publicaciones.service";
import {ResponseSavePubliInterface} from "../modelos/SavePubliModel/responseSavePubli.interface";
import {ResponseLikesInterface} from "../modelos/LikesModel/responseLikes.interface";
import {auto} from "@popperjs/core";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  publicacionesList: any = [];

  constructor(private router:Router, private publicacionesService: PublicacionesService) {
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
  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.publicacionesService.getPublicaciones()
      .subscribe((response :any)=> this.publicacionesList=response);
  }

  verPub(id: any){
    console.log(id);
    this.router.navigate(['publicacion', id])
  }

  likes(idPub:any){
    this.publicacionesService.sumLikes(idPub).subscribe(data => {
      let dataResponse : ResponseLikesInterface = data;
      if(dataResponse.error){
        console.log(dataResponse.error);
      }else {
        console.log(dataResponse.message)
        window.location.reload();
      }
    });
  }


  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen= faDoorOpen;

  faUserPen = faUserPen;
  faMagnifyingGlass= faMagnifyingGlass;

}
