/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiaSemanaListarComponent } from './diaSemana-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { DiaSemana } from '../diaSemana';

describe('DiaSemanaListarComponent', () => {
  let component: DiaSemanaListarComponent;
  let fixture: ComponentFixture<DiaSemanaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiaSemanaListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaSemanaListarComponent);
    component = fixture.componentInstance;
    component.diasSemana = [
      new DiaSemana(
        faker.random.number(),
        true,
        faker.random.boolean(),
        faker.random.boolean(),
        faker.random.boolean(),
        faker.random.boolean(),
        faker.random.boolean(),
        faker.random.boolean()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
