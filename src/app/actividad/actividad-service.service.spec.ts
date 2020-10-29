/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActividadServiceService } from './actividad-service.service';

describe('Service: ActividadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActividadServiceService]
    });
  });

  it('should ...', inject([ActividadServiceService], (service: ActividadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
