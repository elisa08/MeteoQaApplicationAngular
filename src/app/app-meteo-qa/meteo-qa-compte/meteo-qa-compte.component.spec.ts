import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaCompteComponent } from './meteo-qa-compte.component';

describe('MeteoQaCompteComponent', () => {
  let component: MeteoQaCompteComponent;
  let fixture: ComponentFixture<MeteoQaCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
