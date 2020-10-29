import { Component, OnInit } from '@angular/core';
import {Certificado} from '../certificado';
import {CertificadoService} from '../certificado.service';

@Component({
  selector: 'app-certificado-list',
  templateUrl: './certificado-list.component.html',
  styleUrls: ['./certificado-list.component.css']
})
export class CertificadoListComponent implements OnInit {

  constructor(private service: CertificadoService) {}
    public certificados:Array<Certificado>;
    getCertificados():void{
      this.service.getCertificados().subscribe(certificados => {
        this.certificados = certificados;
      });
    }

  ngOnInit() {
    this.getCertificados();
  }

}
