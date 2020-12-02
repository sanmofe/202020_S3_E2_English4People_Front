import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Clase } from '../clase';
import { ClaseDetail } from '../claseDetail';
import { ClaseServiceService } from '../clase-service.service';
@Component({
  selector: 'app-clase-create',
  templateUrl: './clase-create.component.html',
  styleUrls: ['./clase-create.component.scss']
})
export class ClaseCreateComponent implements OnInit {

  claseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private claseService: ClaseServiceService) { }

  cancelCreation(): void {
    this.toastrService.warning('La clase no fue creada', 'Creacion clase');
    this.claseForm.reset();
  }
  ngOnInit() {
    this.claseForm = this.formBuilder.group({
      fecha: ["", [Validators.required]],
      tipoClase: ["", Validators.required],
      profesor: ["", [Validators.required]],
      estudiante: ["", [Validators.required]],
      idioma: ["", [Validators.required]]
    });
  }
  createClase(clase: ClaseDetail) {
    this.claseService.createClase(clase)
      .subscribe(clase => {
        this.toastrService.success('La clase fue creada');
        this.claseForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    alert("La clase fue creada de manera correcta!");
  }
}
