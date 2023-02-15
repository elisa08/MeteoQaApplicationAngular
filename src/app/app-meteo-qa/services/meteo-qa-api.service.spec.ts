import { TestBed } from '@angular/core/testing';

import { MeteoQaApiService } from './meteo-qa-api.service';

describe('MeteoQaApiService', () => {
  let service: MeteoQaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
