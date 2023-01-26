import { TestBed } from '@angular/core/testing';

import { MeteoQaCompteService } from './meteo-qa-compte.service';

describe('MeteoQaCompteService', () => {
  let service: MeteoQaCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
