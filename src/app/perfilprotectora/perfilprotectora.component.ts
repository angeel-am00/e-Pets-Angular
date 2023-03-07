import {Component, OnInit} from '@angular/core';
import {faHouse, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Router, ActivatedRoute} from "@angular/router";
import {ProtectorasService} from "../services/protectoras.service";


@Component({
  selector: 'app-perfilprotectora',
  templateUrl: './perfilprotectora.component.html',
  styleUrls: ['./perfilprotectora.component.css']
})
export class PerfilprotectoraComponent implements OnInit{
  constructor(private router:Router, private activerouter: ActivatedRoute, private protectorasService : ProtectorasService) {
  }
  datosProtectora : any =[]
  ruta(){
    this.router.navigate(["users"])
  }
  ruta2(){
    this.router.navigate(["protectora"])
  }
  ruta3(){
    this.router.navigate(["perfilprotectora2"])
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
  faPaperplane=faPaperPlane;
  public perfilAsociacionId : any;
  ngOnInit() : void{
    this.perfilAsociacionId = this.activerouter.snapshot.paramMap.get('id');
    this.obtenerDatos();

  }

  obtenerDatos(){
    this.protectorasService.getSingleProtectora(this.perfilAsociacionId)
      .subscribe(resp => {
        this.datosProtectora = resp;
        console.log(this.datosProtectora)
      })
  }
}
