/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClaseListComponent } from './clase-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Clase } from "../clase";
import { Profesor } from "src/app/profesor/profesor";
import { Estudiante } from 'src/app/estudiante/estudiante';
import { ClaseDetail } from '../claseDetail';

describe('ClaseListComponent', () => {
  let component: ClaseListComponent;
  let fixture: ComponentFixture<ClaseListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseListComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseListComponent);
    component = fixture.componentInstance;
    let profesor = new Profesor(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null
    );
    let estudiante = new Estudiante(
      faker.random.number(),
      faker.lorem.sentence(),
      faker.random.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );
     component.clases = [
      new ClaseDetail(
        faker.random.number(),
        faker.random.sentence(),
        faker.variable.date(),
        estudiante,
        profesor
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
