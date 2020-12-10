import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Contrato } from '../contrato';
import { ContratoDetail } from '../contratoDetail';
import { ContratoServiceService } from '../contrato-service.service';
import { ProfesorServiceService} from 'src/app/profesor/profesor-service.service';
import { Profesor } from 'src/app/profesor/profesor';
import { Estudiante } from 'src/app/estudiante/estudiante';

@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: []
})
export class ContratoCreateComponent implements OnInit {

  profesor:Profesor;
  estudiante:Estudiante;

  contratoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private contratoService: ContratoServiceService, private profesorService:ProfesorServiceService) { }

    cancelCreation(): void {
      this.toastrService.warning('El contrato no fue creado', 'Creacion contrato');
      this.contratoForm.reset();
    }

  ngOnInit() {
    this.contratoForm = this.formBuilder.group({
      profesor:["",[Validators.required,]],
      estudiante:["",[Validators.required,]],
      numeroHoras: ["", [Validators.required]],
      costo: ["", Validators.required],
      medioPago: ["", [Validators.required]]
    });
  }

  createContrato(contrato: ContratoDetail) {
    contrato.profesor = this.buscarId(contrato.profesor,this.profesor);
    contrato.estudiante = this.buscarId(contrato.estudiante,this.estudiante);
    this.contratoService.createContrato(contrato)
      .subscribe(contrato => {
        this.toastrService.success('El contrato fue creado');
        this.contratoForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    alert("El contrato fue creado satisfactoriamente!");
  }

  buscarId(pal, list) {
      if (list === pal) {
        return list;
      }
    }
}
