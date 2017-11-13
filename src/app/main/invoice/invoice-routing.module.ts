import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { CanDeactivateGuard }       from '../../core/services/can-deactivate-guard.service';

import { InvoicesComponent }        from './invoices/invoices.component';
import { SendInvoicesComponent }    from './send-invoices/send-invoices.component';
import { ResendInvoicesComponent }  from './resend-invoices/resend-invoices.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',             component: InvoicesComponent },
      { path: 'send',         component: SendInvoicesComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'resend/:id',   component: ResendInvoicesComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
