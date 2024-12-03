import { TestBed } from '@angular/core/testing';

import { WassimService } from './wassim.service';

describe('WassimService', () => {
  let service: WassimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WassimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
