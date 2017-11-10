import { Component, EventEmitter, Input, OnInit, Output }   from '@angular/core';
import { FormGroup }                                        from '@angular/forms';

import { QuestionBase }                                     from '../model/question-base';
import { QuestionControlService }                           from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() formData: any;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter();

  form: FormGroup;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    if ( this.formData !== undefined && this.formData !== null) {
      this.form.setValue(this.formData);
    }
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }

  onQuit() {
    this.onCancel.emit();
  }
}
