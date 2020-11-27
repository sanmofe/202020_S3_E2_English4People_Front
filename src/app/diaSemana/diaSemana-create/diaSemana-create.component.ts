import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiaSemana } from '../diaSemana';
import { DiaSemanaService } from '../diaSemana.service';

@Component({
  selector: 'app-diaSemana-create',
  templateUrl: './diaSemana-create.component.html',
  styleUrls: ['./diaSemana-create.component.css']
})
export class DiaSemanaCreateComponent implements OnInit {

  diaSemanaForm: FormGroup;

  diaSemana: DiaSemana;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private diaSemanaService: DiaSemanaService) {}

  cancelCreation(): void {
    this.toastrService.warning('El diaSemana no fue creado', 'Creacion diaSemana');
    this.diaSemanaForm.reset();
  }

  ngOnInit() {
    this.diaSemanaForm = this.formBuilder.group({
      lunes: ['', [Validators.required, Validators.maxLength(5)]],
      martes: ['', [Validators.required, Validators.maxLength(5)]],
      miercoles: ['', [Validators.required, Validators.maxLength(5)]],
      jueves: ['', [Validators.required, Validators.maxLength(5)]],
      viernes: ['', [Validators.required, Validators.maxLength(5)]],
      sabado: ['', [Validators.required, Validators.maxLength(5)]],
      domingo: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  createDiaSemana(diaSemana: DiaSemana) {
    this.diaSemanaService.createDiaSemana(diaSemana)
      .subscribe(diaSemana => {
        this.diaSemana = diaSemana;
        this.toastrService.success('El diaSemana fue creado!');
        this.diaSemanaForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    alert("El diaSemana fue creado satisfactoriamente!");
  }
}
