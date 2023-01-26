import { TestBed } from '@angular/core/testing';

import { MeteoQaAccueilService } from './meteo-qa-accueil.service';

describe('MeteoQaAccueilService', () => {
  let service: MeteoQaAccueilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaAccueilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
