import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-pets-angular';

  constructor(private usersService: UsersService) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    let response;
    this.usersService.getUsers()
      .subscribe(console.log(response));
  }

}
