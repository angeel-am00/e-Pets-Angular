import {Component, OnInit} from '@angular/core';
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faShieldDog} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faUserPen} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute,Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {listausuarios} from "../modelos/listausuarios.interface";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userList : any = [];

  userListBuscados: any =[];
 termino=''

  constructor(private router:Router,private activerouter: ActivatedRoute, private usersService: UsersService) {
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
  faHouse = faHouse;
  faComments = faComments;

  faUsers = faUsers;

  faShieldDog = faShieldDog;

  faDoorOpen= faDoorOpen;

  faUserPen = faUserPen;

  faMagnifyingGlass= faMagnifyingGlass;

  busqueda = this.termino;
  public usuarioBuscado:any;
  ngOnInit(): void {

    this.usersService.getUsers()
      .subscribe((response: any) => this.userList=response);



  }

  perfilUsuario(id: any){
    console.log(id);
    this.router.navigate(['perfilusers', id])
  }
  guardarBusqueda(){

    localStorage.setItem('busqueda', this.termino)
    this.usuarioBuscado = localStorage.getItem('busqueda')

    this.usersService.buscarUser(this.usuarioBuscado)
      .subscribe(resp =>{this.userListBuscados =resp; console.log(resp)}  );
    const buscados:any = document.getElementById('buscados');
    const todos:any = document.getElementById('todos');
    buscados.style.display = 'block';
    todos.style.display = 'none';

  }

  refresh(){
    location.reload()
  }



}
