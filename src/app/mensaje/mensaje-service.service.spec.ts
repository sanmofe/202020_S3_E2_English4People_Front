/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensajeServiceService } from './mensaje-service.service';

describe('Service: MensajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeServiceService]
    });
  });

  it('should ...', inject([MensajeServiceService], (service: MensajeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
