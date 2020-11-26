import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../estudiante';
import { EstudianteDetail } from '../estudianteDetail';
import { EstudianteServiceService } from '../estudiante-service.service';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  @Input() estudianteDetail: EstudianteDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estudianteService: EstudianteServiceService
  ) { }

  estudianteId: number;
  getEstudianteDetail(): void {
    this.estudianteService.getEstudianteDetail(this.estudianteId)
      .subscribe(estudianteDetail => {
        this.estudianteDetail = estudianteDetail;
      });
  }
  ngOnInit() {
    if (this.estudianteDetail === undefined) {
      console.log('routerLink');
      this.estudianteId = +this.route.snapshot.paramMap.get('id');
      this.getEstudianteDetail();

    } else { console.log(this.estudianteDetail.id); }
  }

}
