import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { AuthGuardUser }                from '../../core/services/auth-guard.service';
import { AuthGuardView }                from '../../core/services/auth-guard.service';
import { CanDeactivateGuard }           from '../../core/services/can-deactivate-guard.service';

import { CustomersComponent }           from './customers/customers.component';
import { NewCustomerComponent }         from './new-customer/new-customer.component';
import { EditCustomerComponent }        from './edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardView],
    children: [
      { path: 'new',        component: NewCustomerComponent, canActivate: [AuthGuardUser], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditCustomerComponent, canActivate: [AuthGuardUser], canDeactivate: [CanDeactivateGuard] },
      { path: '',           component: CustomersComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
