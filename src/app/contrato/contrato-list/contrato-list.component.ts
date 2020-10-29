import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoServiceService} from '../contrato-service.service';

@Component({
  selector: 'app-contrato-list',
  templateUrl: './contrato-list.component.html',
  styleUrls: ['./contrato-list.component.css']
})
export class ContratoListComponent implements OnInit {

  constructor(private service: ContratoServiceService) { }
  contratos: Array<Contrato>;
  getContratos(): any{
    return this.service.getContratos().subscribe(c => this.contratos = c);
  }
  ngOnInit() {
    this.getContratos();
    console.log("init");
  }

}
