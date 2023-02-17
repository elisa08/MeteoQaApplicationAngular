import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaCommuneComponent } from './meteo-qa-commune.component';

describe('MeteoQaCommuneComponent', () => {
  let component: MeteoQaCommuneComponent;
  let fixture: ComponentFixture<MeteoQaCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaCommuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
