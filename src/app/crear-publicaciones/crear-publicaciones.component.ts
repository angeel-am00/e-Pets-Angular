import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PublicacionesService} from "../services/publicaciones.service";
import {ResponseSavePubliInterface} from '../modelos/SavePubliModel/responseSavePubli.interface';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReponseInterface} from "../modelos/LoginModel/reponse.interface";

@Component({
  selector: 'app-crear-publicaciones',
  templateUrl: './crear-publicaciones.component.html',
  styleUrls: ['./crear-publicaciones.component.css']
})
export class CrearPublicacionesComponent implements OnInit {

  crearPubForm = new FormGroup({
    cuerpo: new FormControl('', Validators.required),
    imagen: new FormControl('')
  })

  constructor(private router: Router, private PublicacionesService: PublicacionesService) {
  }

  errorStatus: boolean = false;
  errorMsg: any = "";

  ngOnInit() {
  }

  savePub(form: any) {
    console.log(form);
    this.PublicacionesService.savePublicacion(form).subscribe(data => {
      let dataResponse: ResponseSavePubliInterface = data;
      if (dataResponse.prohibido) {
        console.log(dataResponse.prohibido);
        window.location.reload();
      } else if (dataResponse.error) {
        console.log(dataResponse.error);
        window.location.reload()
      } else {
        console.log(dataResponse.message);
        this.router.navigate(['home']);
      }
    });
  }
}
