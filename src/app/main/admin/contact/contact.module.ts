import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

import { ContactService }               from '../../../services/contact.service';
import { ContactRoutingModule }         from './contact-routing.module';
import { ContactsComponent }            from './contacts/contacts.component';
import { NewContactComponent }          from './new-contact/new-contact.component';
import { EditContactComponent }         from './edit-contact/edit-contact.component';
import { ViewContactComponent }         from './view-contact/view-contact.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    ContactRoutingModule
],
declarations: [
    ContactsComponent,
    NewContactComponent,
    EditContactComponent,
    ViewContactComponent
],
providers: [
    ContactService
]
})
export class ContactModule { }
