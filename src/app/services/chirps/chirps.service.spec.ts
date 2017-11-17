import { TestBed, inject } from '@angular/core/testing';

import { ChirpsService } from './chirps.service';

describe('ChirpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChirpsService]
    });
  });

  it('should be created', inject([ChirpsService], (service: ChirpsService) => {
    expect(service).toBeTruthy();
  }));
});
