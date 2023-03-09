import {Component, OnInit} from '@angular/core';
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
import {PublicacionesService} from "../services/publicaciones.service";
import {ProtectoraService} from "../services/protectora.service";

import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";
import {ResponseCambiarEstadoPubInterface} from "../modelos/CambiarEstadoPub/responseCambiarEstadoPub.interface";
import {ResponseDeleteProtectoraInterface} from "../modelos/ProtectoraModel/responseDeleteProtectora.interface";

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit{

  datosUser :any;
  publicacionesAcabadas: any;

  constructor(private router:Router,private _confing:NgbAccordionConfig, private usersService : UsersService, private publicacionesService : PublicacionesService, private protectoraservice: ProtectoraService) {
  }

  errorStatus:boolean = false;
  succesStatus:boolean = false;
  errorMsg:any = "";
  succesMsg:any = "";

  ngOnInit(): void {
    this.getMiPerfilData();
    this.getPubAcabadas();
  }

  getMiPerfilData(){
    this.usersService.getMiPerfil()
      .subscribe(resp => {
        this.datosUser = resp;
        console.log(this.datosUser)
      })
  }

  getPubAcabadas(){
    this.publicacionesService.getPublicacionesAcabadas()
      .subscribe(resp =>{
        this.publicacionesAcabadas = resp;
        console.log(this.publicacionesAcabadas)
      })
  }

  cambiarEstadoPub(idPub:any){
    this.publicacionesService.cambiarEstadoPub(idPub).subscribe(data => {
      let dataResponse: ResponseCambiarEstadoPubInterface = data;
      if(dataResponse.error){
        console.log(dataResponse.error);
        //window.location.reload();
      } else {
        console.log(dataResponse.message);
        window.location.reload();
      }
    });
  }

  noSerProtectora(){
    this.protectoraservice.deleteProtectora().subscribe(data=>{
      let dataResponse: ResponseDeleteProtectoraInterface = data
      if(dataResponse.prohibido){
        console.log(dataResponse.prohibido)
        this.errorStatus = true;
        this.errorMsg = dataResponse.prohibido;
      }else if(dataResponse.error){
        console.log(dataResponse.error)
        this.errorStatus = true;
        this.errorMsg = dataResponse.error;
        window.location.reload();
      }else {
        this.succesStatus = true;
        this.succesMsg = dataResponse.message;
        window.location.reload();
      }
    });
  }

  verPub(id: any){
    console.log(id);
    this.router.navigate(['publicacion', id])
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
  tags(idPub:any){
    this.router.navigate(["crearTags", idPub])
  }
  ruta6(){
    this.router.navigate(["editarperfil"])
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

  faArrowLeft = faArrowLeft;

  faPaperplane=faPaperPlane;

}
