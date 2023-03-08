import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
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
import {PublicacionesService} from "../services/publicaciones.service";
import {PrincipalComponent} from "../principal/principal.component";
import {ResponseLikesInterface} from "../modelos/LikesModel/responseLikes.interface";
import {ComentariosService} from "../services/comentarios.service";
import {ResponseSaveComenInterface} from "../modelos/ComentariosModel/responseSaveComen.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-comentariopubli',
  templateUrl: './comentariopubli.component.html',
  styleUrls: ['./comentariopubli.component.css']
})
export class ComentariopubliComponent implements OnInit {

  crearComenForm = new FormGroup({
    mensaje: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private activerouter: ActivatedRoute, private publiService: PublicacionesService, private comenService:ComentariosService) {
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

  serprotectora() {
    this.router.navigate(["serprotectora"])
  }

  ruta6() {
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

  getToken() {
    return localStorage.getItem('token');

  }

  public perfilUserId: any;
  datosPubli: any;

  ngOnInit(): void {
    this.perfilUserId = this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.obtenerDatosPubli()
    // console.log(perfilUserId);
    //this.usersService.getSingleUser(perfilUserId).subscribe((response :any)=> this.datosUser=response);
  }

  obtenerDatosPubli() {
    this.publiService.getSiglePublication(this.perfilUserId)
      .subscribe(resp => {
        this.datosPubli = resp;
        console.log(this.datosPubli)
      })
  }

  likes(idPub: any) {
    this.publiService.sumLikes(idPub).subscribe(data => {
      let dataResponse: ResponseLikesInterface = data;
      if (dataResponse.error) {
        console.log(dataResponse.error);
      } else {
        console.log(dataResponse.message)
        window.location.reload();
      }
    });
  }

  perfilUsuario(id: any) {
    console.log(id);
    this.router.navigate(['perfilusers', id])
  }

  saveComen(form:any, idPub:any){
    console.log(form);
    this.comenService.saveComentario(form, idPub).subscribe(data => {
      let dataResponse: ResponseSaveComenInterface = data;
      if(dataResponse.prohibido){
        console.log(dataResponse.prohibido);
        //window.location.reload();
      } else if (dataResponse.error){
        console.log(dataResponse.error);
        //window.location.reload();
      } else {
        console.log(dataResponse.message);
        window.location.reload();
      }
    });
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

  faArrowLeft = faArrowLeft
  faPaperplane=faPaperPlane;
}
