import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import { UsersComponent } from './users/users.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProtectoraComponent } from './protectora/protectora.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    UsersComponent,
    ProtectoraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '', component: HomeComponent},
      {path: 'home', component: PrincipalComponent},
      {path: 'users', component: UsersComponent},
      {path: 'protectora', component: ProtectoraComponent},
    ]),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
