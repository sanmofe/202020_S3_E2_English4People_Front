import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Actividad } from '../actividad';
import { ActividadDetail } from '../actividadDetail';
import { ActividadServiceService } from '../actividad-service.service';

@Component({
  selector: 'app-actividad-create',
  templateUrl: './actividad-create.component.html',
  styleUrls: ['./actividad-create.component.scss']
})
export class ActividadCreateComponent implements OnInit {

  actividadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private actividadService: ActividadServiceService) { }

  cancelCreation(): void {
    this.toastrService.warning('La actividad no fue creada', 'Creacion actividad');
    this.actividadForm.reset();
  }

ngOnInit() {
  this.actividadForm = this.formBuilder.group({
    tipoActividad: ["", [Validators.required]],
    descripcion: ["", Validators.required],
    fecha: ["", [Validators.required]]
  });
}

createActividad(actividad: ActividadDetail) {
  this.actividadService.createActividad(actividad)
    .subscribe(actividad => {
      this.toastrService.success('La actividad fue creada');
      this.actividadForm.reset()
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  alert("La actividad fue creada de manera correcta!");
}
}
