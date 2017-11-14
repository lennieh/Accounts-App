import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

import { CompanyService }               from '../../../services/company.service';
import { CompanyRoutingModule }         from './company-routing.module';
import { CompaniesComponent }           from './companies/companies.component';
import { NewCompanyComponent }          from './new-company/new-company.component';
import { EditCompanyComponent }         from './edit-company/edit-company.component';
import { ViewCompanyComponent }         from './view-company/view-company.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    CompanyRoutingModule
],
declarations: [
    CompaniesComponent,
    NewCompanyComponent,
    EditCompanyComponent,
    ViewCompanyComponent
],
providers: [
    CompanyService
]
})
export class CompanyModule { }
