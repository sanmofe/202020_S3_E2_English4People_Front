/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstudianteServiceService } from './estudiante-service.service';

describe('Service: EstudianteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudianteServiceService]
    });
  });

  it('should ...', inject([EstudianteServiceService], (service: EstudianteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
