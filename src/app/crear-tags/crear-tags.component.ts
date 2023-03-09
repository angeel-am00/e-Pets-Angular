import {Component, OnInit} from '@angular/core';
import {faHouse, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {listausuarios} from "../modelos/listausuarios.interface";
import {UsersService} from "../services/users.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {TagService} from "../services/tag.service";
import {ResponseSaveTagsInterface} from "../modelos/TagsModel/responseSaveTags.interface";
import {PublicacionesService} from "../services/publicaciones.service";

@Component({
  selector: 'app-crear-tags',
  templateUrl: './crear-tags.component.html',
  styleUrls: ['./crear-tags.component.css']
})
export class CrearTagsComponent implements OnInit {

  constructor(private router: Router, private tagService: TagService, private activerouter: ActivatedRoute, private publicacionesService: PublicacionesService) {
  }

  crearTagForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  tagsList: any = [];
  public idPub: any;
  publicacionesList: any = [];
  errorStatus:boolean = false;
  errorMsg:any="";

  ngOnInit() {
    this.idPub = this.activerouter.snapshot.paramMap.get('id');
    this.tagService.getTag()
      .subscribe((response : any)=> this.tagsList=response)

    this.obtenerDatosPubli();
  }

  obtenerDatosPubli() {
    this.publicacionesService.getSiglePublication(this.idPub)
      .subscribe(resp => {
        this.publicacionesList = resp;
        console.log(this.publicacionesList)
      })
  }

  establecerTag(form:any){
    console.log(form)
    this.tagService.saveTag(form, this.idPub).subscribe(data =>{
      let dataResponse: ResponseSaveTagsInterface = data;
      if(dataResponse.error){
        console.log(dataResponse.error);
        this.errorStatus=true;
        this.errorMsg=dataResponse.error;
      }else{
        this.router.navigate(['miperfil'])
      }
    })
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

  miperfil(){
    this.router.navigate(["miperfil"])
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

}
