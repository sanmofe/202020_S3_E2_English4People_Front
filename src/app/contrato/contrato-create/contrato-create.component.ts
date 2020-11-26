import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Contrato } from '../contrato';
import { ContratoDetail } from '../contratoDetail';
import { ContratoServiceService } from '../contrato-service.service';

@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.scss']
})
export class ContratoCreateComponent implements OnInit {

  contratoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private contratoService: ContratoServiceService) { }

    cancelCreation(): void {
      this.toastrService.warning('El contrato no fue creado', 'Creacion contrato');
      this.contratoForm.reset();
    }

  ngOnInit() {
    this.contratoForm = this.formBuilder.group({
      numeroHoras: ["", [Validators.required]],
      costo: ["", Validators.required],
      medioPago: ["", [Validators.required]]
    });
  }

  createContrato(contrato: ContratoDetail) {
    this.contratoService.createContrato(contrato)
      .subscribe(contrato => {
        this.toastrService.success('El contrato fue creado');
        this.contratoForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }
}
