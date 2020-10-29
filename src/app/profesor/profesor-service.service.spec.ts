/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfesorServiceService } from './profesor-service.service';

describe('Service: ProfesorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesorServiceService]
    });
  });

  it('should ...', inject([ProfesorServiceService], (service: ProfesorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
