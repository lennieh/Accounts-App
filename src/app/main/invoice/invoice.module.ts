import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { SharedModule }             from '../../shared/shared.module';
import { DynamicFormModule }        from '../../dynamic/dynamic-form.module';

import { InvoiceRoutingModule }     from './invoice-routing.module';
import { InvoicesComponent }        from './invoices/invoices.component';
import { SendInvoicesComponent}     from './send-invoices/send-invoices.component';
import { ResendInvoicesComponent }  from './resend-invoices/resend-invoices.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DynamicFormModule,
    InvoiceRoutingModule
  ],
  declarations: [
    InvoicesComponent,
    SendInvoicesComponent,
    ResendInvoicesComponent
  ]
})
export class InvoiceModule { }
