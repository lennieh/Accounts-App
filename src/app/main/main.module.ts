import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { MainRoutingModule }  from './main-routing.module';
import { SharedModule }       from '../shared/shared.module';

import { ContactService }     from '../services/contact.service';
import { HomeComponent }      from './home/home.component';
import { CompanyComponent }   from './admin/company/company.component';
import { VatComponent }       from './admin/vat/vat.component';
import { ContactsComponent }  from './admin/contacts/contacts.component';
import { ContactFormComponent } from './admin/contacts/contact-form/contact-form.component';

import { JobEntryComponent }  from './jobentry/jobentry.component';
import { JobReportComponent } from './jobreport/jobreport.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent, 
    CompanyComponent, 
    VatComponent, 
    ContactsComponent,
    JobEntryComponent, 
    JobReportComponent, ContactFormComponent 
  ],
  providers: [
    ContactService
  ]
})
export class MainModule { }
