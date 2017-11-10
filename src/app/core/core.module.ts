import { NgModule, Optional, SkipSelf }       from '@angular/core';
import { CommonModule }                       from '@angular/common';

import { LoggerService }                      from './logger.service';
import { Toast, ToasterService }              from 'angular2-toaster';

import { throwIfAlreadyLoaded }               from './module-import-guard';
import { CanDeactivateGuard }                 from './can-deactivate-guard.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    LoggerService,
    ToasterService,
    CanDeactivateGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
