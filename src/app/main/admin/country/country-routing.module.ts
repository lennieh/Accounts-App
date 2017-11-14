import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';
import { AuthGuardAdmin }               from '../../../core/services/auth-guard.service';

import { CountryComponent }             from './countries/country.component';
import { NewCountryComponent }          from './new-country/new-country.component';
import { EditCountryComponent }         from './edit-country/edit-country.component';
import { ViewCountryComponent }         from './view-country/view-country.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: CountryComponent },
      { path: 'new',        component: NewCountryComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditCountryComponent, canActivate: [AuthGuardAdmin],  canDeactivate: [CanDeactivateGuard] },
      { path: 'view/:id',   component: ViewCountryComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
