import { TestBed } from '@angular/core/testing';

import { MeteoQaFavorisService } from './meteo-qa-favoris.service';

describe('MeteoQaFavorisService', () => {
  let service: MeteoQaFavorisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaFavorisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
