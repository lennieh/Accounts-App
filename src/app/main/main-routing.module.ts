import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { CompanyComponent }     from './admin/company/company.component';
import { VatComponent }         from './admin/vat/vat.component';
import { ContactsComponent }    from './admin/contacts/contacts.component';
import { JobEntryComponent }    from './jobentry/jobentry.component';
import { JobReportComponent }   from './jobreport/jobreport.component';

const routes: Routes = [
  { 
    path: 'main',
    component: HomeComponent,
    children: [
      {path: 'company',   component: CompanyComponent },
      {path: 'vat',       component: VatComponent },
      {path: 'contacts',  component: ContactsComponent },
      {path: 'jobentry',  component: JobEntryComponent },
      {path: 'jobreport', component: JobReportComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
