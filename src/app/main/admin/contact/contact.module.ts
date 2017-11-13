import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

// import { DynamicFormComponent }         from '../../../dynamic/dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from '../../../dynamic/dynamic-form/dynamic-form-question.component';

import { ContactService }               from '../../../services/contact.service';
import { ContactRoutingModule }         from './contact-routing.module';
import { ContactsComponent }           from './contacts/contacts.component';
import { NewContactComponent }          from './new-contact/new-contact.component';
import { EditContactComponent }         from './edit-contact/edit-contact.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    ContactRoutingModule
],
declarations: [
//    DynamicFormComponent,
//    DynamicFormQuestionComponent,
    ContactsComponent,
    NewContactComponent,
    EditContactComponent
],
providers: [
    ContactService
]
})
export class ContactModule { }
