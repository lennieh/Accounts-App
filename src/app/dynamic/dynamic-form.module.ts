import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { ReactiveFormsModule }              from '@angular/forms';

import { SharedModule }                     from '../shared/shared.module';

import { DynamicFormComponent }             from './dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent }         from './dynamic-form/dynamic-question/dynamic-question.component';
import { QuestionService }                  from './question.service';
import { QuestionControlService }           from './question-control.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
         DynamicFormComponent,
         DynamicQuestionComponent
    ],
    providers: [
        QuestionService,
        QuestionControlService
    ],
    // TODO: do we need these??
    exports: [
        FormsModule,
        ReactiveFormsModule,
        DynamicFormComponent,
        DynamicQuestionComponent
    ]
})
export class DynamicFormModule { }
