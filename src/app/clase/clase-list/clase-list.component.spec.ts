/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClaseListComponent } from './clase-list.component';

describe('ClaseListComponent', () => {
  let component: ClaseListComponent;
  let fixture: ComponentFixture<ClaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
