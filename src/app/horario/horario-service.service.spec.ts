/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HorarioServiceService } from './horario-service.service';

describe('Service: HorarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorarioServiceService]
    });
  });

  it('should ...', inject([HorarioServiceService], (service: HorarioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
