import { TestBed } from '@angular/core/testing';

import { SoftinnotecKnightsTourService } from './softinnotec-knights-tour.service';

describe('SoftinnotecKnightsTourService', () => {
  let service: SoftinnotecKnightsTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftinnotecKnightsTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
