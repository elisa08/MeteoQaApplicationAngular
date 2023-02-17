import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaAffichageComponent } from './meteo-qa-affichage.component';

describe('MeteoQaAffichageComponent', () => {
  let component: MeteoQaAffichageComponent;
  let fixture: ComponentFixture<MeteoQaAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaAffichageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
