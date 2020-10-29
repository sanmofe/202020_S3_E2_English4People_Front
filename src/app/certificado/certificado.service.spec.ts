/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CertificadoService } from './certificado.service';

describe('Service: Certificado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificadoService]
    });
  });

  it('should ...', inject([CertificadoService], (service: CertificadoService) => {
    expect(service).toBeTruthy();
  }));
});
