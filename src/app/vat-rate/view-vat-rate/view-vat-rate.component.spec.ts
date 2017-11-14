import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVatRateComponent } from './view-vat-rate.component';

describe('ViewVatRateComponent', () => {
  let component: ViewVatRateComponent;
  let fixture: ComponentFixture<ViewVatRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVatRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVatRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
