/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiaSemanaListarComponent } from './diaSemana-listar.component';

describe('DiaSemanaListarComponent', () => {
  let component: DiaSemanaListarComponent;
  let fixture: ComponentFixture<DiaSemanaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaSemanaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaSemanaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
