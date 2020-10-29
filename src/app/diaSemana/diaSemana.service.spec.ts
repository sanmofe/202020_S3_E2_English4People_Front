/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiaSemanaService } from './diaSemana.service';

describe('Service: DiaSemana', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaSemanaService]
    });
  });

  it('should ...', inject([DiaSemanaService], (service: DiaSemanaService) => {
    expect(service).toBeTruthy();
  }));
});
