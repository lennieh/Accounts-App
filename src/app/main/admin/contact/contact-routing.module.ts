import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { CanDeactivateGuard }           from '../../../core/services/can-deactivate-guard.service';

import { ContactsComponent }            from './contacts/contacts.component';
import { NewContactComponent }          from './new-contact/new-contact.component';
import { EditContactComponent }         from './edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',           component: ContactsComponent },
      { path: 'new',        component: NewContactComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id',   component: EditContactComponent, canDeactivate: [CanDeactivateGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
