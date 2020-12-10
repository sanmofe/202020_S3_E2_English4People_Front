import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoServiceService} from '../contrato-service.service';
import { ContratoDetail } from '../contratoDetail';

@Component({
  selector: 'app-contrato-list',
  templateUrl: './contrato-list.component.html',
  styleUrls: []
})
export class ContratoListComponent implements OnInit {

  selectedContrato: Contrato;
  selected = false;

  onSelected(b: Contrato): void {
    this.selected = true;
    this.selectedContrato = b;
  }

  constructor(private service: ContratoServiceService) { }
  contratos: Array<ContratoDetail>;
  getContratos(): any{
    return this.service.getContratos().subscribe(c => this.contratos = c);
  }
  ngOnInit() {
    this.getContratos();
  }

}
