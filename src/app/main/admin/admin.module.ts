import { NgModule }                 from '@angular/core';

import { SharedModule }             from '../../shared/shared.module';
import { AdminRoutingModule }       from './admin-routing.module';
// import { CompanyModule }            from './company/company.module';
// import { ContactModule }            from './contact/contact.module';
// import { CountryModule }            from './country/country.module';
// import { VatRateModule }            from './vat-rate/vat-rate.module';

@NgModule({
    imports: [
        // CompanyModule,
        // ContactModule,
        // CountryModule,
        // VatRateModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
