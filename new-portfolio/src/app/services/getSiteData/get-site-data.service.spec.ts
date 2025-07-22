import { TestBed } from '@angular/core/testing';

import { GetSiteDataService } from './get-site-data.service';

describe('GetSiteDataService', () => {
  let service: GetSiteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSiteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
