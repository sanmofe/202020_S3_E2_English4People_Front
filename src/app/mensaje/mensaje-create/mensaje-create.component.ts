import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Mensaje } from '../mensaje';
import { MensajeServiceService} from '../mensaje-service.service';
import { MensajeDetail} from '../mensajeDetail';


@Component({
  selector: 'app-mensaje-create',
  templateUrl: './mensaje-create.component.html',
  styleUrls: ['./mensaje-create.component.css']
})
export class MensajeCreateComponent implements OnInit {

  mensajeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private mensajeService: MensajeServiceService) { }

  cancelCreation(): void {
    this.toastrService.warning('El mensaje no fue creado', 'Creacion mensaje');
    this.mensajeForm.reset();
  }

  ngOnInit() {

   }

  createMensaje(mensaje: MensajeDetail) {
    this.mensajeService.createMensaje(mensaje)
      .subscribe(mensaje => {
        this.toastrService.success('El mensaje fue creado');
        this.mensajeForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
      alert("El mensaje fue creado satisfactoriamente!");
  }
}
