import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { ToasterModule }            from 'angular2-toaster';

import { MaterialModule }           from './material.module';

import { AppConfirmDialogComponent }  from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    MaterialModule
  ],
  declarations: [AppConfirmDialogComponent],
  entryComponents: [
    AppConfirmDialogComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModule { }
