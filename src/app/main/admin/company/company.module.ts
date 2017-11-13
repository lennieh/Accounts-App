import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

// import { DynamicFormComponent }         from '../../../dynamic/dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from '../../../dynamic/dynamic-form/dynamic-form-question.component';

import { CompanyService }               from '../../../services/company.service';
import { CompanyRoutingModule }         from './company-routing.module';
import { CompaniesComponent }           from './companies/companies.component';
import { NewCompanyComponent }          from './new-company/new-company.component';
import { EditCompanyComponent }         from './edit-company/edit-company.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    CompanyRoutingModule
],
declarations: [
//    DynamicFormComponent,
//    DynamicFormQuestionComponent,
    CompaniesComponent,
    NewCompanyComponent,
    EditCompanyComponent
],
providers: [
    CompanyService
]
})
export class CompanyModule { }
