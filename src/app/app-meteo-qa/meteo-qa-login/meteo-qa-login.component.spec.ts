import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaLoginComponent } from './meteo-qa-login.component';

describe('MeteoQaLoginComponent', () => {
  let component: MeteoQaLoginComponent;
  let fixture: ComponentFixture<MeteoQaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
