import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';
import { AuthGuardAdmin }               from '../../../core/services/auth-guard.service';

import { VatRatesComponent }            from './vat-rates/vat-rates.component';
import { NewVatRateComponent }          from './new-vat-rate/new-vat-rate.component';
import { EditVatRateComponent }         from './edit-vat-rate/edit-vat-rate.component';
import { ViewVatRateComponent }         from './view-vat-rate/view-vat-rate.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: VatRatesComponent },
      { path: 'new',        component: NewVatRateComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditVatRateComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'view/:id',   component: ViewVatRateComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatRateRoutingModule { }
