import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaMessageComponent } from './meteo-qa-message.component';

describe('MeteoQaMessageComponent', () => {
  let component: MeteoQaMessageComponent;
  let fixture: ComponentFixture<MeteoQaMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
