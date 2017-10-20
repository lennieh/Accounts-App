import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobentryComponent } from './jobentry.component';

describe('JobentryComponent', () => {
  let component: JobentryComponent;
  let fixture: ComponentFixture<JobentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
