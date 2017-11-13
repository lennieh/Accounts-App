import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
// import { FormsModule }                    from '@angular/forms';
// import { ReactiveFormsModule }            from '@angular/forms';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';

import { MainRoutingModule }              from './main-routing.module';
import { SharedModule }                   from '../shared/shared.module';
// import { AdminModule }                    from './admin/admin.module';
// import { DynamicFormModule }              from '../dynamic/dynamic-form.module';
// import { QuestionService }                from '../dynamic/question.service';
// import { QuestionControlService }         from '../dynamic/question-control.service';

import { MainComponent }        from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

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
//    FormsModule,
//    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
//    AdminModule,
    MainRoutingModule
  ],
  declarations: [
//    DynamicFormComponent,
//    DynamicFormQuestionComponent,
    MainComponent,
    DashboardComponent,
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
//    QuestionService,
//    QuestionControlService
  ],
  exports: [BrowserAnimationsModule]
})
export class MainModule { }
