import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../core/services/can-deactivate-guard.service';

import { MainComponent }                from './main.component';
import { DashboardComponent }           from './dashboard/dashboard.component';

import { JobEntryComponent }            from './job/job-entry/job-entry.component';
import { JobSearchComponent }           from './job/job-search/job-search.component';

import { NewCustomerComponent }         from './customer/new-customer/new-customer.component';
import { EditCustomerComponent }        from './customer/edit-customer/edit-customer.component';

import { NewTalentComponent }           from './talent/new-talent/new-talent.component';
import { EditTalentComponent }          from './talent/edit-talent/edit-talent.component';

import { SendInvoicesComponent}         from './invoice/send-invoices/send-invoices.component';
import { ResendInvoicesComponent }      from './invoice/resend-invoices/resend-invoices.component';
import { ViewInvoicesComponent }        from './invoice/view-invoices/view-invoices.component';

import { SendRemittancesComponent}      from './remit/send-remittances/send-remittances.component';
import { ResendRemittancesComponent }   from './remit/resend-remittances/resend-remittances.component';
import { ViewRemittancesComponent }     from './remit/view-remittances/view-remittances.component';

import { ReportsComponent }             from './reports/reports.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'dashboard',          component: DashboardComponent },
      { path: 'admin',              loadChildren: 'app/main/admin/admin.module#AdminModule'},

      { path: 'jobentry',           component: JobEntryComponent },
      { path: 'jobsearch',          component: JobSearchComponent },

      { path: 'newcustomer',        component: NewCustomerComponent },
      { path: 'editcustomer',       component: EditCustomerComponent },

      { path: 'newtalent',          component: NewTalentComponent },
      { path: 'edittalent',         component: EditTalentComponent },

      { path: 'reports',            component: ReportsComponent },

      { path: 'sendinvoices',       component: SendInvoicesComponent },
      { path: 'resendinvoices',     component: ResendInvoicesComponent },
      { path: 'viewinvoices',       component: ViewInvoicesComponent },

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
