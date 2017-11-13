import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';

import { CountryComponent }             from './countries/country.component';
import { NewCountryComponent }          from './new-country/new-country.component';
import { EditCountryComponent }         from './edit-country/edit-country.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: CountryComponent },
      { path: 'new',        component: NewCountryComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditCountryComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
