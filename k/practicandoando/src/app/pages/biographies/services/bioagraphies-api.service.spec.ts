import { TestBed } from '@angular/core/testing';

import { BiographiesApiService } from './biographies-api.service';

describe('BiographiesApiService', () => {
  let service: BiographiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
