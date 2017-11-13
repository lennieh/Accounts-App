import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { SharedModule }               from '../../shared/shared.module';
import { DynamicFormModule }          from '../../dynamic/dynamic-form.module';

import { CustomerRoutingModule }      from './customer-routing.module';
import { CustomersComponent }         from './customers/customers.component';
import { NewCustomerComponent }       from './new-customer/new-customer.component';
import { EditCustomerComponent }      from './edit-customer/edit-customer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DynamicFormModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent
  ]
})
export class CustomerModule { }
