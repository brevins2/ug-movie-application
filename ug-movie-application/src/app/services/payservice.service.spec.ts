import { TestBed } from '@angular/core/testing';

import { PayserviceService } from './payservice.service';

describe('PayserviceService', () => {
  let service: PayserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
