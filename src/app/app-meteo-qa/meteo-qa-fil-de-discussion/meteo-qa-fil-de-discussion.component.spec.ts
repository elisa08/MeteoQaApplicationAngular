import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaFilDeDiscussionComponent } from './meteo-qa-fil-de-discussion.component';

describe('MeteoQaFilDeDiscussionComponent', () => {
  let component: MeteoQaFilDeDiscussionComponent;
  let fixture: ComponentFixture<MeteoQaFilDeDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaFilDeDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaFilDeDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
