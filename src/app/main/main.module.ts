import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { FormsModule }                    from '@angular/forms';
import { ReactiveFormsModule }            from '@angular/forms';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';

import { MainRoutingModule }              from './main-routing.module';
import { SharedModule }                   from '../shared/shared.module';

import { DynamicFormComponent }           from '../generate/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent }   from '../generate/dynamic-form/dynamic-form-question.component';
import { QuestionService }                from '../generate/question.service';
import { QuestionControlService }         from '../generate/question-control.service';

import { MainComponent }        from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { CompanyService }       from '../services/company.service';
import { CompaniesComponent }   from './admin/company/companies.component';
import { NewCompanyComponent }  from './admin/company/new-company.component';
import { EditCompanyComponent } from './admin/company/edit-company.component';

import { ContactService }       from '../services/contact.service';
import { ContactsComponent }    from './admin/contacts/contacts.component';
import { NewContactComponent }  from './admin/contacts/new-contact.component';
import { EditContactComponent } from './admin/contacts/edit-contact.component';

import { VatService }           from '../services/vat.service';
import { VatComponent }         from './admin/vat/vat.component';
import { NewVatComponent }      from './admin/vat/new-vat.component';
import { EditVatComponent }     from './admin/vat/edit-vat.component';

import { CountryService }       from '../services/country.service';
import { CountryComponent }     from './admin/country/country.component';
import { EditCountryComponent } from './admin/country/edit-country.component';
import { NewCountryComponent }  from './admin/country/new-country.component';

import { ReportsComponent } from './reports/reports.component';

import { JobSearchComponent } from './job/job-search/job-search.component';
import { JobEntryComponent } from './job/job-entry/job-entry.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { NewTalentComponent } from './talent/new-talent/new-talent.component';
import { EditTalentComponent } from './talent/edit-talent/edit-talent.component';
import { SendInvoicesComponent } from './invoice/send-invoices/send-invoices.component';
import { ResendInvoicesComponent } from './invoice/resend-invoices/resend-invoices.component';
import { ViewInvoicesComponent } from './invoice/view-invoices/view-invoices.component';
import { SendRemittancesComponent } from './remit/send-remittances/send-remittances.component';
import { ResendRemittancesComponent } from './remit/resend-remittances/resend-remittances.component';
import { ViewRemittancesComponent } from './remit/view-remittances/view-remittances.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    MainComponent,
    DashboardComponent,
    CompaniesComponent,
    NewCompanyComponent,
    EditCompanyComponent,
    ContactsComponent,
    NewContactComponent,
    EditContactComponent,
    CountryComponent,
    EditCountryComponent,
    VatComponent,
    NewVatComponent,
    EditVatComponent,
    NewCountryComponent,
    ReportsComponent,
    ViewRemittancesComponent,
    JobSearchComponent,
    JobEntryComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    NewTalentComponent,
    EditTalentComponent,
    SendInvoicesComponent,
    ResendInvoicesComponent,
    ViewInvoicesComponent,
    SendRemittancesComponent,
    ResendRemittancesComponent,
  ],
  providers: [
    CompanyService,
    ContactService,
    CountryService,
    VatService,
    QuestionService,
    QuestionControlService
  ]
})
export class MainModule { }
