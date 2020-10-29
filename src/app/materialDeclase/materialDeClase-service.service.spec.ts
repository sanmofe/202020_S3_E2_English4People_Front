/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterialDeClaseServiceService } from './materialDeClase-service.service';

describe('Service: MaterialDeClaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialDeClaseServiceService]
    });
  });

  it('should ...', inject([MaterialDeClaseServiceService], (service: MaterialDeClaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
