import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

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
import { PerfilusersComponent } from './perfilusers/perfilusers.component';
import { PerfilprotectoraComponent } from './perfilprotectora/perfilprotectora.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MiperfilComponent } from './miperfil/miperfil.component';
import { MiperfileditarComponent } from './miperfileditar/miperfileditar.component';
import { SerprotectoraComponent } from './serprotectora/serprotectora.component';
import { ComentariopubliComponent } from './comentariopubli/comentariopubli.component';
import { CrearPublicacionesComponent } from './crear-publicaciones/crear-publicaciones.component';
import { LogoutComponent } from './logout/logout.component';
import { CrearTagsComponent } from './crear-tags/crear-tags.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    UsersComponent,
    ProtectoraComponent,
    PerfilusersComponent,
    PerfilprotectoraComponent,
    MiperfilComponent,
    MiperfileditarComponent,
    SerprotectoraComponent,
    ComentariopubliComponent,
    CrearPublicacionesComponent,
    CrearTagsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '', component: HomeComponent},
      {path: 'home', component: PrincipalComponent},
      {path: 'users', component: UsersComponent},
      {path: 'protectora', component: ProtectoraComponent},
      {path: 'perfilusers/:id', component: PerfilusersComponent},
      {path: 'perfilprotectora/:id', component: PerfilprotectoraComponent},
      {path: 'perfilprotectora', component: PerfilprotectoraComponent},
      {path: 'editarperfil', component: MiperfileditarComponent},
      {path: 'miperfil', component: MiperfilComponent},
      {path: 'serprotectora', component: SerprotectoraComponent},
      {path: 'publicacion/:id', component: ComentariopubliComponent},
      {path: 'crearPub', component: CrearPublicacionesComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'crearTags/:id', component: CrearTagsComponent},
    ]),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
