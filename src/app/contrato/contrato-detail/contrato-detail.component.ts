import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoDetail } from '../contratoDetail';

@Component({
  selector: 'app-contrato-detail',
  templateUrl: './contrato-detail.component.html',
  styleUrls: []
})
export class ContratoDetailComponent implements OnInit {

  @Input() contratoDetail: ContratoDetail;

  selectedContrato: Contrato;

  constructor() { }

  ngOnInit() {
    console.log(this.contratoDetail.id);
  }

}
