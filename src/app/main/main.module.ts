import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';

import { MainRoutingModule }              from './main-routing.module';
import { SharedModule }                   from '../shared/shared.module';

import { MainComponent }        from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { ReportsComponent } from './reports/reports.component';

import { JobSearchComponent } from './job/job-search/job-search.component';
import { JobEntryComponent } from './job/job-entry/job-entry.component';
import { NewTalentComponent } from './talent/new-talent/new-talent.component';
import { EditTalentComponent } from './talent/edit-talent/edit-talent.component';
import { SendRemittancesComponent } from './remit/send-remittances/send-remittances.component';
import { ResendRemittancesComponent } from './remit/resend-remittances/resend-remittances.component';
import { ViewRemittancesComponent } from './remit/view-remittances/view-remittances.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    DashboardComponent,
    ReportsComponent,
    ViewRemittancesComponent,
    JobSearchComponent,
    JobEntryComponent,
    NewTalentComponent,
    EditTalentComponent,
    SendRemittancesComponent,
    ResendRemittancesComponent,
  ],
  exports: [BrowserAnimationsModule]
})
export class MainModule { }
