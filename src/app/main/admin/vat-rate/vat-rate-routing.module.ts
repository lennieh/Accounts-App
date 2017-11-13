import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';

import { VatComponent }                 from './vat-rates/vat.component';
import { NewVatComponent }              from './new-vat-rate/new-vat.component';
import { EditVatComponent }             from './edit-vat-rate/edit-vat.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: VatComponent },
      { path: 'new',        component: NewVatComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditVatComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatRoutingModule { }
