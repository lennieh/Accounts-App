import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRemittancesComponent } from './view-remittances.component';

describe('ViewRemittancesComponent', () => {
  let component: ViewRemittancesComponent;
  let fixture: ComponentFixture<ViewRemittancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRemittancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRemittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
