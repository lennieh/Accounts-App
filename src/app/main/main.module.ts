import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule }  from './main-routing.module';
import { SharedModule }       from '../shared/shared.module';
import { HomeComponent }      from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { VatComponent } from './vat/vat.component';
import { JobEntryComponent } from './jobentry/jobentry.component';
import { JobReportComponent } from './jobreport/jobreport.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent, 
    CompanyComponent, 
    VatComponent, 
    JobEntryComponent, 
    JobReportComponent]
})
export class MainModule { }
