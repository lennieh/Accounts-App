import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';

import { AuthGuardAdmin }               from '../../../core/services/auth-guard.service';

import { CompaniesComponent }           from './companies/companies.component';
import { NewCompanyComponent }          from './new-company/new-company.component';
import { EditCompanyComponent }         from './edit-company/edit-company.component';
import { ViewCompanyComponent }         from './view-company/view-company.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: CompaniesComponent },
      { path: 'new',        component: NewCompanyComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'view/:id',   component: ViewCompanyComponent },
      { path: 'edit/:id',   component: EditCompanyComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
