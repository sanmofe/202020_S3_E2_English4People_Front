/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActividadListComponent } from './actividad-list.component';

describe('ActividadListComponent', () => {
  let component: ActividadListComponent;
  let fixture: ComponentFixture<ActividadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
