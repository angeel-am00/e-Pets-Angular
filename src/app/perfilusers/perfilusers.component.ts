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

@Component({
  selector: 'app-perfilusers',
  templateUrl: './perfilusers.component.html',
  styleUrls: ['./perfilusers.component.css']
})
export class PerfilusersComponent implements OnInit{


  constructor(private router:Router, private activerouter: ActivatedRoute, private usersService : UsersService) {
  }
  datosUser :any;
  datosUserFor = new FormGroup({
    username: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
  })
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

  ruta5(){
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

  public perfilUserId:any;
  ngOnInit(): void {
    this.perfilUserId = this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.obtenerDatos()
    // console.log(perfilUserId);
    //this.usersService.getSingleUser(perfilUserId).subscribe((response :any)=> this.datosUser=response);
  }
  getToken(){
    return localStorage.getItem('token');

  }


  obtenerDatos(){
    this.usersService.getSingleUser(this.perfilUserId)
      .subscribe(resp => {
        this.datosUser = resp;
        console.log(this.datosUser)
      })
  }




}
