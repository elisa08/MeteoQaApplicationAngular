import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaNavComponent } from './meteo-qa-nav.component';

describe('MeteoQaNavComponent', () => {
  let component: MeteoQaNavComponent;
  let fixture: ComponentFixture<MeteoQaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
