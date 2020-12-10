import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Estudiante } from '../estudiante';
import { EstudianteServiceService} from '../estudiante-service.service';
import { EstudianteDetail} from '../estudianteDetail';


@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  estudianteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private estudianteService: EstudianteServiceService) { }

  cancelCreation(): void {
    this.toastrService.warning('El estudiante no fue creado', 'Creacion estudiante');
    this.estudianteForm.reset();
  }

  ngOnInit() {
    this.estudianteForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      identificacion: ["", [Validators.required, Validators.maxLength(12)]],
      login: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.email]],
      contrasena: ["",[Validators.required,]]
    });
  }

  createEstudiante(estudiante: EstudianteDetail) {
    this.estudianteService.createEstudiante(estudiante)
      .subscribe(estudiante => {
        this.toastrService.success('El estudiante fue creado');
        this.estudianteForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
      alert("El estudiante fue creado satisfactoriamente!");
  }

}
