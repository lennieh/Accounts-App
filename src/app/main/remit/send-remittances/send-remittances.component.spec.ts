import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRemittancesComponent } from './send-remittances.component';

describe('SendRemittancesComponent', () => {
  let component: SendRemittancesComponent;
  let fixture: ComponentFixture<SendRemittancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRemittancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRemittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
