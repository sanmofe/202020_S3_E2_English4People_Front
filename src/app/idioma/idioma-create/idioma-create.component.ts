import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Idioma } from '../idioma';
import { IdiomaService } from '../idioma.service';

@Component({
  selector: 'app-idioma-create',
  templateUrl: './idioma-create.component.html',
  styleUrls: ['./idioma-create.component.css'],
})
export class IdiomaCreateComponent implements OnInit {
  idiomaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private idiomaService: IdiomaService) {}

  cancelCreation(): void {
    this.toastrService.warning('El idioma no fue creado', 'Creacion idioma');
    this.idiomaForm.reset();
  }

  ngOnInit() {
    this.idiomaForm = this.formBuilder.group({
      espanol: ['', [Validators.required, Validators.maxLength(5)]],
      ingles: ['', [Validators.required, Validators.maxLength(5)]],
      frances: ['', [Validators.required, Validators.maxLength(5)]],
      italiano: ['', [Validators.required, Validators.maxLength(5)]],
      portugues: ['', [Validators.required, Validators.maxLength(5)]],
      aleman: ['', [Validators.required, Validators.maxLength(5)]],
      japones: ['', [Validators.required, Validators.maxLength(5)]],
      coreano: ['', [Validators.required, Validators.maxLength(5)]],
      mandarin: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  createIdioma(idioma: Idioma) {
    console.log(idioma.espanol);
    this.idiomaService.createIdioma(idioma)
      .subscribe(idioma => {
        this.toastrService.success('El idioma fue creado');
        this.idiomaForm.reset()
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }
}
