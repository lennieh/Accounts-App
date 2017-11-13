import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { AuthGuard }                    from '../../core/services/auth-guard.service';
import { CanDeactivateGuard }           from '../../core/services/can-deactivate-guard.service';

import { CustomersComponent }           from './customers/customers.component';
import { NewCustomerComponent }         from './new-customer/new-customer.component';
import { EditCustomerComponent }        from './edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'new',        component: NewCustomerComponent, canActivateChild:[AuthGuard], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditCustomerComponent, canActivateChild:[AuthGuard], canDeactivate: [CanDeactivateGuard] },
      { path: '',           component: CustomersComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
