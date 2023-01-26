import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaRubriqueComponent } from './meteo-qa-rubrique.component';

describe('MeteoQaRubriqueComponent', () => {
  let component: MeteoQaRubriqueComponent;
  let fixture: ComponentFixture<MeteoQaRubriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaRubriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaRubriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
