import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../../../shared/shared.module';
import { DynamicFormModule }            from '../../../dynamic/dynamic-form.module';

// import { DynamicFormComponent }         from '../../../dynamic/dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from '../../../dynamic/dynamic-form/dynamic-form-question.component';

import { CountryService }               from '../../../services/country.service';
import { CountryRoutingModule }         from './country-routing.module';

import { CountryComponent }             from './countries/country.component';
import { NewCountryComponent }          from './new-country/new-country.component';
import { EditCountryComponent }         from './edit-country/edit-country.component';

@NgModule({
imports: [
    SharedModule,
    DynamicFormModule,
    CountryRoutingModule
],
declarations: [
//    DynamicFormComponent,
//    DynamicFormQuestionComponent,
    CountryComponent,
    NewCountryComponent,
    EditCountryComponent
],
providers: [
    CountryService
]
})
export class CountryModule { }
