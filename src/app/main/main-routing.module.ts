import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './home/home.component';

import { CompanyComponent }     from './admin/company/company.component';
import { VatComponent }         from './admin/vat/vat.component';

import { ContactsComponent }    from './admin/contacts/contacts.component';
import { NewContactComponent }  from './admin/contacts/new-contact.component';
import { EditContactComponent } from './admin/contacts/edit-contact.component';

import { CountryComponent }     from './admin/country/country.component';
import { NewCountryComponent }  from './admin/country/new-country.component';
import { EditCountryComponent } from './admin/country/edit-country.component';

import { JobEntryComponent }    from './jobentry/jobentry.component';
import { JobReportComponent }   from './jobreport/jobreport.component';

const routes: Routes = [
  {
    path: 'main',
    component: HomeComponent,
    children: [
      { path: 'company',            component: CompanyComponent },
      { path: 'vat',                component: VatComponent },

      { path: 'contacts',           component: ContactsComponent },
      { path: 'contacts/new',       component: NewContactComponent },
      { path: 'contacts/edit/:id',  component: EditContactComponent },

      { path: 'country',            component: CountryComponent },
      { path: 'country/new',        component: NewCountryComponent },
      { path: 'country/edit/:id',   component: EditCountryComponent },

      { path: 'jobentry',           component: JobEntryComponent },
      { path: 'jobreport',          component: JobReportComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
