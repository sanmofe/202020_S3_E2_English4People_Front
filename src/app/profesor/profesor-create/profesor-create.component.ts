import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Profesor } from '../profesor';
import { ProfesorServiceService} from '../profesor-service.service';
import { ProfesorDetail} from '../profesorDetail';
import { Idioma } from 'src/app/idioma/idioma';
import { IdiomaService } from 'src/app/idioma/idioma.service';


@Component({
  selector: 'app-profesor-create',
  templateUrl: './profesor-create.component.html',
  styleUrls: ['./profesor-create.component.css']
})
export class ProfesorCreateComponent implements OnInit {

  idiomas:Idioma[];

  profesorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private profesorService: ProfesorServiceService,private idiomaService:IdiomaService) { }

  cancelCreation(): void {
    this.toastrService.warning('El profesor no fue creado', 'Creacion profesor');
    this.profesorForm.reset();
  }

  ngOnInit() {
    this.profesorForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      identificacion: ["", [Validators.required, Validators.maxLength(12)]],
      login: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      contrasena: ["",[Validators.required,]],
      idioma:["",[Validators.required,]],
      informacionAcademica:["",[Validators.required]],
      canalYoutube:[""]
    });
  }

  createProfesor(profesor: ProfesorDetail) {

    this.profesorService.createProfesor(profesor)
      .subscribe(profesor => {
        this.toastrService.success('El profesor fue creado');
        this.profesorForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
      alert("El profesor fue creado satisfactoriamente!");
  }
}
