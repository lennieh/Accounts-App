import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }        from './main.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { CompaniesComponent }   from './admin/company/companies.component';
import { NewCompanyComponent }  from './admin/company/new-company.component';
import { EditCompanyComponent } from './admin/company/edit-company.component';

import { VatComponent }         from './admin/vat/vat.component';
import { NewVatComponent }      from './admin/vat/new-vat.component';
import { EditVatComponent }     from './admin/vat/edit-vat.component';

import { ContactsComponent }    from './admin/contacts/contacts.component';
import { NewContactComponent }  from './admin/contacts/new-contact.component';
import { EditContactComponent } from './admin/contacts/edit-contact.component';

import { CountryComponent }     from './admin/country/country.component';
import { NewCountryComponent }  from './admin/country/new-country.component';
import { EditCountryComponent } from './admin/country/edit-country.component';

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
      { path: 'company',            component: CompaniesComponent },
      { path: 'company/new',        component: NewCompanyComponent },
      { path: 'company/edit/:id',   component: EditCompanyComponent },

      { path: 'vat',                component: VatComponent },
      { path: 'vat/new',            component: NewVatComponent },
      { path: 'vat/edit/:id',       component: EditVatComponent },

      { path: 'contacts',           component: ContactsComponent },
      { path: 'contacts/new',       component: NewContactComponent },
      { path: 'contacts/edit/:id',  component: EditContactComponent },

      { path: 'country',            component: CountryComponent },
      { path: 'country/new',        component: NewCountryComponent },
      { path: 'country/edit/:id',   component: EditCountryComponent },

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
