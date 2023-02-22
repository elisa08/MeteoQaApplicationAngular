import { TestBed } from '@angular/core/testing';

import { MeteoQaIndicateurService } from './meteo-qa-indicateur.service';

describe('IndicateurService', () => {
  let service: MeteoQaIndicateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaIndicateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
