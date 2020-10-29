import { Component, OnInit } from '@angular/core';
import { Idioma } from '../idioma';
import { IdiomaService } from '../idioma.service';

@Component({
  selector: 'app-idioma-listar',
  templateUrl: './idioma-listar.component.html',
  styleUrls: ['./idioma-listar.component.css']
})
export class IdiomaListarComponent implements OnInit {

  constructor(private idiomaService: IdiomaService) { }

  public idiomas: Array<Idioma>;

  getIdiomas(): void {
    this.idiomaService.getIdiomas()
      .subscribe(idiomas => {
        this.idiomas = idiomas;
      });
  }

  ngOnInit() {
    this.getIdiomas();
  }

}
