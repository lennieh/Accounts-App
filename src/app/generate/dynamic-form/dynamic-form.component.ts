import { Component, EventEmitter, Input, OnInit, Output }   from '@angular/core';
import { FormGroup }                                        from '@angular/forms';

import { QuestionBase }              from '../model/question-base';
import { QuestionControlService }    from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Output() onSave = new EventEmitter<any>();

  form: FormGroup;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.onSave.emit(this.form.value);
  }
}
