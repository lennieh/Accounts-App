import { NgModule, Optional, SkipSelf }       from '@angular/core';
import { CommonModule }                       from '@angular/common';

import { Toast, ToasterService }              from 'angular2-toaster';

import { AuthService }                        from './services/auth.service';
import { AuthGuardAdmin }                     from './services/auth-guard.service';
import { AuthGuardUser }                      from './services/auth-guard.service';
import { AuthGuardView }                      from './services/auth-guard.service';
import { HttpCacheService }                   from './services/http-cache.service';
import { LoggerService }                      from './services/logger.service';
import { CanDeactivateGuard }                 from './services/can-deactivate-guard.service';
import { RoleMenuService }                    from './services/role-menu.service';

import { AuthInterceptorProvider }            from './interceptors/auth.interceptor';
import { CachingInterceptorProvider }         from './interceptors/caching.interceptor';
import { ErrorInterceptorProvider }           from './interceptors/error.interceptor';

import { throwIfAlreadyLoaded }               from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    AuthService,
    AuthGuardAdmin,
    AuthGuardUser,
    AuthGuardView,
    LoggerService,
    ToasterService,
    HttpCacheService,
    CanDeactivateGuard,
    RoleMenuService,
    ErrorInterceptorProvider,
    CachingInterceptorProvider,
    AuthInterceptorProvider
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
