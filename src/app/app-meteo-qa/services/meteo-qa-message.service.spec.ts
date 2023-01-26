import { TestBed } from '@angular/core/testing';

import { MeteoQaMessageService } from './meteo-qa-message.service';

describe('MeteoQaMessageService', () => {
  let service: MeteoQaMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
