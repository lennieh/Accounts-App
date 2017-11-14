import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';
import { AuthGuardAdmin }               from '../../../core/services/auth-guard.service';

import { ContactsComponent }            from './contacts/contacts.component';
import { NewContactComponent }          from './new-contact/new-contact.component';
import { EditContactComponent }         from './edit-contact/edit-contact.component';
import { ViewContactComponent }         from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: ContactsComponent },
      { path: 'new',        component: NewContactComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditContactComponent, canActivate: [AuthGuardAdmin], canDeactivate: [CanDeactivateGuard] },
      { path: 'view/:id',   component: ViewContactComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
