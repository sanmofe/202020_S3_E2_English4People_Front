import { Component, OnInit } from '@angular/core';
import { DiaSemana } from '../diaSemana';
import { DiaSemanaService } from '../diaSemana.service';

@Component({
  selector: 'app-diaSemana-listar',
  templateUrl: './diaSemana-listar.component.html',
  styleUrls: ['./diaSemana-listar.component.css'],
})
export class DiaSemanaListarComponent implements OnInit {
  selected = false;
  selectedDiaSemana: DiaSemana;

  constructor(private diaSemanaService: DiaSemanaService) {}

  public diasSemana: Array<DiaSemana>;

  getDiasSemana(): void {
    this.diaSemanaService.getDiasSemana().subscribe((diasSemana) => {
      this.diasSemana = diasSemana;
    });
  }
  ngOnInit() {
    this.getDiasSemana();
  }

  onSelected(ds: DiaSemana): void {
    this.selected = true;
    this.selectedDiaSemana = ds;
  }
}
