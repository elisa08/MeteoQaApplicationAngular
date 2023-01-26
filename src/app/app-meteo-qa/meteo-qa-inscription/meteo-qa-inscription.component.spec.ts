import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaInscriptionComponent } from './meteo-qa-inscription.component';

describe('MeteoQaInscriptionComponent', () => {
  let component: MeteoQaInscriptionComponent;
  let fixture: ComponentFixture<MeteoQaInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
