import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AuthGuardAdmin,
  AuthGuardUser,
  AuthGuardView }               from '../core/services/auth-guard.service';
import { AuthService }          from '../core/services/auth.service';
import { LoginComponent }       from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardAdmin,
    AuthGuardUser,
    AuthGuardView,
    AuthService
  ]
})
export class LoginRoutingModule { }
