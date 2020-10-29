/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClaseServiceService } from './clase-service.service';

describe('Service: ClaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClaseServiceService]
    });
  });

  it('should ...', inject([ClaseServiceService], (service: ClaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
