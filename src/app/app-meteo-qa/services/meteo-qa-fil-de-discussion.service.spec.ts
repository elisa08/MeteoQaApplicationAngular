import { TestBed } from '@angular/core/testing';

import { MeteoQaFilDeDiscussionService } from './meteo-qa-fil-de-discussion.service';

describe('MeteoQaFilDeDiscussionService', () => {
  let service: MeteoQaFilDeDiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoQaFilDeDiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
