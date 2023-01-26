import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaFavorisComponent } from './meteo-qa-favoris.component';

describe('MeteoQaFavorisComponent', () => {
  let component: MeteoQaFavorisComponent;
  let fixture: ComponentFixture<MeteoQaFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaFavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
