import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvoicesComponent } from './send-invoices.component';

describe('SendInvoicesComponent', () => {
  let component: SendInvoicesComponent;
  let fixture: ComponentFixture<SendInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
