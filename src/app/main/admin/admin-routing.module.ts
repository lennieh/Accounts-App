import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'company', loadChildren: 'app/main/admin/company/company.module#CompanyModule' },
      { path: 'contact', loadChildren: 'app/main/admin/contact/contact.module#ContactModule' },
      { path: 'country', loadChildren: 'app/main/admin/country/country.module#CountryModule' },
      { path: 'vat',     loadChildren: 'app/main/admin/vat-rate/vat-rate.module#VatRateModule' },
      //    { path: 'company',  },
//    { path: 'contact' },
//      { path: 'country' },
//      { path: 'vat'}
    //   { path: 'company/new',        component: NewCompanyComponent, canDeactivate: [CanDeactivateGuard] },
    //   { path: 'company/edit/:id',   component: EditCompanyComponent, canDeactivate: [CanDeactivateGuard] },

    //   { path: 'vat',                component: VatComponent },
    //   { path: 'vat/new',            component: NewVatComponent, canDeactivate: [CanDeactivateGuard] },
    //   { path: 'vat/edit/:id',       component: EditVatComponent, canDeactivate: [CanDeactivateGuard] },

    //   { path: 'contacts',           component: ContactsComponent },
    //   { path: 'contacts/new',       component: NewContactComponent, canDeactivate: [CanDeactivateGuard] },
    //   { path: 'contacts/edit/:id',  component: EditContactComponent, canDeactivate: [CanDeactivateGuard] },

    //   { path: 'country',            component: CountryComponent },
    //   { path: 'country/new',        component: NewCountryComponent, canDeactivate: [CanDeactivateGuard] },
    //   { path: 'country/edit/:id',   component: EditCountryComponent, canDeactivate: [CanDeactivateGuard] },

    //   { path: 'jobentry',           component: JobEntryComponent },
    //   { path: 'jobsearch',          component: JobSearchComponent },

    //   { path: 'newcustomer',        component: NewCustomerComponent },
    //   { path: 'editcustomer',       component: EditCustomerComponent },

    //   { path: 'newtalent',          component: NewTalentComponent },
    //   { path: 'edittalent',         component: EditTalentComponent },

    //   { path: 'reports',            component: ReportsComponent },

    //   { path: 'sendinvoices',       component: SendInvoicesComponent },
    //   { path: 'resendinvoices',     component: ResendInvoicesComponent },
    //   { path: 'viewinvoices',       component: ViewInvoicesComponent },

    //   { path: 'sendremittances',    component: SendRemittancesComponent },
    //   { path: 'resendremittances',  component: ResendRemittancesComponent },
    //   { path: 'viewremittances',    component: ViewRemittancesComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
