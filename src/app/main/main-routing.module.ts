import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../core/services/can-deactivate-guard.service';

import { MainComponent }                from './main.component';
import { DashboardComponent }           from './dashboard/dashboard.component';

import { JobEntryComponent }            from './job/job-entry/job-entry.component';
import { JobSearchComponent }           from './job/job-search/job-search.component';

import { NewTalentComponent }           from './talent/new-talent/new-talent.component';
import { EditTalentComponent }          from './talent/edit-talent/edit-talent.component';

import { SendRemittancesComponent}      from './remit/send-remittances/send-remittances.component';
import { ResendRemittancesComponent }   from './remit/resend-remittances/resend-remittances.component';
import { ViewRemittancesComponent }     from './remit/view-remittances/view-remittances.component';

import { ReportsComponent }             from './reports/reports.component';
import { AuthGuardAdmin, AuthGuardView } from '../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardView],
    children: [
      { path: 'dashboard',          component: DashboardComponent },
      { path: 'admin',              loadChildren: 'app/main/admin/admin.module#AdminModule', canActivate: [AuthGuardAdmin]},

      { path: 'customer',           loadChildren: 'app/main/customer/customer.module#CustomerModule'},
      { path: 'invoice',            loadChildren: 'app/main/invoice/invoice.module#InvoiceModule'},

      { path: 'jobentry',           component: JobEntryComponent },
      { path: 'jobsearch',          component: JobSearchComponent },

      { path: 'newtalent',          component: NewTalentComponent },
      { path: 'edittalent',         component: EditTalentComponent },

      { path: 'reports',            component: ReportsComponent },

      { path: 'sendremittances',    component: SendRemittancesComponent },
      { path: 'resendremittances',  component: ResendRemittancesComponent },
      { path: 'viewremittances',    component: ViewRemittancesComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
