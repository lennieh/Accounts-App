import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';

import { CompaniesComponent }           from './companies/companies.component';
import { NewCompanyComponent }          from './new-company/new-company.component';
import { EditCompanyComponent }         from './edit-company/edit-company.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: CompaniesComponent },
      { path: 'new',        component: NewCompanyComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditCompanyComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
