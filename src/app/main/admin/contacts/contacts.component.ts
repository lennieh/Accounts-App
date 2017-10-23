import { Component, OnInit }            from '@angular/core';

import { ToasterService }               from 'angular2-toaster';

import { AbstractPageWithToaster }      from '../../../abstract/abstractPageWithToaster.component';

import { Contact }                      from '../../../model/contact';
import { ContactService }               from '../../../contact/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent 
  extends AbstractPageWithToaster
  implements OnInit {

    loading: boolean;
    contacts: Contact[];
    selectedContact: Contact;

  constructor(private contactService: ContactService, toasterService: ToasterService) {
    super(toasterService)
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.loading = true;
    this.contactService.getContacts().subscribe(
      data => {
        this.loading = false; 
        this.contacts = data;     
      },
      error => {
        this.loading = false;
        this.HandleError(error, 'Edit Contacts', 'Unexpected Error reading Contacts' );
      }
    )
  }

  edit(contact: Contact): void {
    this.selectedContact = contact;
  }

  add(): void {
    this.selectedContact = new Contact();
  }
  
  delete(contact: Contact): void {
    this.loading = true;
    this.contactService.deleteContact(contact.id).subscribe(
      data => {
        this.loading = false; 
        this.contacts = this.contacts.filter( c => c !== contact);
        if( this.selectedContact === contact) { this.selectedContact = null; }
      },
      error => {
        this.loading = false; 
        this.HandleError(error, "Delete Contact", "Unexpected error deleting contact");
      }
    )
  }
}
