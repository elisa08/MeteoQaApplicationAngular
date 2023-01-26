import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaAccueilComponent } from './meteo-qa-accueil.component';

describe('MeteoQaAccueilComponent', () => {
  let component: MeteoQaAccueilComponent;
  let fixture: ComponentFixture<MeteoQaAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
