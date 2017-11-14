import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVatComponent } from './new-vat.component';

describe('NewVatComponent', () => {
  let component: NewVatComponent;
  let fixture: ComponentFixture<NewVatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
