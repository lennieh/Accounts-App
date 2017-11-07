import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendInvoicesComponent } from './resend-invoices.component';

describe('ResendInvoicesComponent', () => {
  let component: ResendInvoicesComponent;
  let fixture: ComponentFixture<ResendInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
