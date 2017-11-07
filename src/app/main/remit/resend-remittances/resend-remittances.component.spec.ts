import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendRemittancesComponent } from './resend-remittances.component';

describe('ResendRemittancesComponent', () => {
  let component: ResendRemittancesComponent;
  let fixture: ComponentFixture<ResendRemittancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendRemittancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendRemittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
