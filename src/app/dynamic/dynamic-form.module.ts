import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { ReactiveFormsModule }              from '@angular/forms';

import { SharedModule }                     from '../shared/shared.module';

import { DynamicFormComponent }             from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent }     from './dynamic-form/dynamic-form-question.component';
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
         DynamicFormQuestionComponent
    ],
    providers: [
        QuestionService,
        QuestionControlService
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ]
})
export class DynamicFormModule { }
