import { TestBed, inject } from '@angular/core/testing';

import { SubsService } from './subs.service';

describe('SubsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubsService]
    });
  });

  it('should be created', inject([SubsService], (service: SubsService) => {
    expect(service).toBeTruthy();
  }));
});
