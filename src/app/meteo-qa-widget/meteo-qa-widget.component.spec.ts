import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoQaWidgetComponent } from './meteo-qa-widget.component';

describe('MeteoQaWidgetComponent', () => {
  let component: MeteoQaWidgetComponent;
  let fixture: ComponentFixture<MeteoQaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoQaWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoQaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
