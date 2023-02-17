import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaForumComponent } from './meteo-qa-forum.component';

describe('MeteoQaForumComponent', () => {
  let component: MeteoQaForumComponent;
  let fixture: ComponentFixture<MeteoQaForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
