import { TestBed } from '@angular/core/testing';

import { MeteoQaRubriqueService } from './meteo-qa-rubrique.service';

describe('MeteoQaRubriqueService', () => {
  let service: MeteoQaRubriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaRubriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
