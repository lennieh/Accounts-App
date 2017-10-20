import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'; 

import { ToasterModule }            from 'angular2-toaster';

import { MaterialModule }           from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    MaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModule { }
