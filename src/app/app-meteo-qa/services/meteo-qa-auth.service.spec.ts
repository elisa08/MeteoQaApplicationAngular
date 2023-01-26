import { TestBed } from '@angular/core/testing';

import { MeteoQaAuthService } from './meteo-qa-auth.service';

describe('MeteoQaAuthService', () => {
  let service: MeteoQaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
