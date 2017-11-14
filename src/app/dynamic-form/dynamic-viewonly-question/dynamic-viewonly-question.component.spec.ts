import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicViewonlyQuestionComponent } from './dynamic-viewonly-question.component';

describe('DynamicViewonlyQuestionComponent', () => {
  let component: DynamicViewonlyQuestionComponent;
  let fixture: ComponentFixture<DynamicViewonlyQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicViewonlyQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicViewonlyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
