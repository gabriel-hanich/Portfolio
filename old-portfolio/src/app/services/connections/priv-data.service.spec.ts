import { TestBed } from '@angular/core/testing';

import { PrivDataService } from './priv-data.service';

describe('PrivDataService', () => {
  let service: PrivDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
