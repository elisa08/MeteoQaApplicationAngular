import { TestBed } from '@angular/core/testing';

import { MeteoQaCommuneService } from './meteo-qa-commune.service';

describe('MeteoQaCommuneService', () => {
  let service: MeteoQaCommuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaCommuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
