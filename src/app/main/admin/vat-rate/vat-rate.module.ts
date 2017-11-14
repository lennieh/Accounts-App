import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

import { VatService }                   from '../../../services/vat.service';
import { VatRoutingModule }             from './vat-rate-routing.module';

import { VatComponent }                 from './vat-rates/vat.component';
import { NewVatComponent }              from './new-vat-rate/new-vat.component';
import { EditVatComponent }             from './edit-vat-rate/edit-vat.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    VatRoutingModule
],
declarations: [
    VatComponent,
    NewVatComponent,
    EditVatComponent
],
providers: [
    VatService
]
})
export class VatRateModule { }
