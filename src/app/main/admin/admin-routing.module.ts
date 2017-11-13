import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { AuthGuardAdmin }                    from '../../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuardAdmin],
    children: [
      { path: 'company', loadChildren: 'app/main/admin/company/company.module#CompanyModule' },
      { path: 'contact', loadChildren: 'app/main/admin/contact/contact.module#ContactModule' },
      { path: 'country', loadChildren: 'app/main/admin/country/country.module#CountryModule' },
      { path: 'vat',     loadChildren: 'app/main/admin/vat-rate/vat-rate.module#VatRateModule' },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
