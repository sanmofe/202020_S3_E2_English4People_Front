/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdiomaListarComponent } from './idioma-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from 'faker';
import { Idioma } from '../idioma';

describe('IdiomaListarComponent', () => {
  let component: IdiomaListarComponent;
  let fixture: ComponentFixture<IdiomaListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdiomaListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomaListarComponent);
    component = fixture.componentInstance;
    component.idiomas = [
      new Idioma(
        faker.random.number(),
        true,
        faker.random.boolean(),
        faker.random.boolean(),
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
