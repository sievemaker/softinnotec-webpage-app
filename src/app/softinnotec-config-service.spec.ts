import { TestBed } from '@angular/core/testing';

import { SoftinnotecConfigService } from './softinnotec-config-service';

describe('SoftinnotecConfigService', () => {
  let service: SoftinnotecConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftinnotecConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
