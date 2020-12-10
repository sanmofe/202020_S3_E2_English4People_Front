import { Component, OnInit, Input } from '@angular/core';
import { Certificado} from '../certificado';


@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: []
})
export class CertificadoComponent implements OnInit {

  @Input () certificados: Certificado [];


  constructor() { }

  ngOnInit() {
  }

}
