import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'; 

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModule { }
