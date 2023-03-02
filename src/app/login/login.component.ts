import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {LoginInterface} from '../modelos/LoginModel/login.interface';
import {ReponseInterface} from '../modelos/LoginModel/reponse.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router:Router, private loginService:LoginService) {
  }

  errorStatus:boolean = false;
  errorMsg:any = "";

  ruta(){
    this.router.navigate(["registro"])
  }

  ngOnInit() {
    this.checkLocalStorage();
  }

  login(form:any) {
    console.log(form);
    this.loginService.loginUser(form).subscribe(data=>{
      let dataResponse:ReponseInterface = data;
      if(dataResponse.token){
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['home']);
      }else{
        this.errorStatus = true;
        this.errorMsg = dataResponse.message;
      }

    });
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['home'])
    }
  }

}

