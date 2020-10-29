/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContratoServiceService } from './contrato-service.service';

describe('Service: ContratoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratoServiceService]
    });
  });

  it('should ...', inject([ContratoServiceService], (service: ContratoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
