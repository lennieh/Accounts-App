import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';

import { MainRoutingModule }  from './main-routing.module';
import { SharedModule }       from '../shared/shared.module';

// import { GenerateModule }                 from '../generate/generate.module';
import { DynamicFormComponent }           from '../generate/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent }   from '../generate/dynamic-form/dynamic-form-question.component';
import { QuestionService }                from '../generate/question.service';
import { QuestionControlService }         from '../generate/question-control.service';

import { HomeComponent }        from './home/home.component';
import { CompanyComponent }     from './admin/company/company.component';

import { ContactService }       from '../services/contact.service';
import { ContactsComponent }    from './admin/contacts/contacts.component';
import { NewContactComponent }  from './admin/contacts/new-contact.component';
import { EditContactComponent } from './admin/contacts/edit-contact.component';

import { JobEntryComponent }    from './jobentry/jobentry.component';
import { JobReportComponent }   from './jobreport/jobreport.component';

import { CountryService }       from '../services/country.service';
import { CountryComponent }     from './admin/country/country.component';
import { EditCountryComponent } from './admin/country/edit-country.component';
import { NewCountryComponent }  from './admin/country/new-country.component';

import { VatService }           from '../services/vat.service';
import { VatComponent }         from './admin/vat/vat.component';
import { NewVatComponent }      from './admin/vat/new-vat.component';
import { EditVatComponent }     from './admin/vat/edit-vat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
//    GenerateModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    HomeComponent,
    CompanyComponent,
    ContactsComponent,
    NewContactComponent,
    EditContactComponent,
    JobEntryComponent,
    JobReportComponent,
    CountryComponent,
    EditCountryComponent,
    NewCountryComponent,
    VatComponent,
    NewVatComponent,
    EditVatComponent
  ],
  providers: [
    ContactService,
    CountryService,
    VatService,
    QuestionService,
    QuestionControlService
  ]
})
export class MainModule { }
