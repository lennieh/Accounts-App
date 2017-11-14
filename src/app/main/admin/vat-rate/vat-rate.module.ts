import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

import { VatService }                   from '../../../services/vat.service';
import { VatRateRoutingModule }         from './vat-rate-routing.module';

import { VatRatesComponent }            from './vat-rates/vat-rates.component';
import { NewVatRateComponent }          from './new-vat-rate/new-vat-rate.component';
import { EditVatRateComponent }         from './edit-vat-rate/edit-vat-rate.component';
import { ViewVatRateComponent }         from './view-vat-rate/view-vat-rate.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    VatRateRoutingModule
],
declarations: [
    VatRatesComponent,
    NewVatRateComponent,
    EditVatRateComponent,
    ViewVatRateComponent
],
providers: [
    VatService
]
})
export class VatRateModule { }
