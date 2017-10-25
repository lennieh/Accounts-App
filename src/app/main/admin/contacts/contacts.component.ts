import { Component, OnInit }            from '@angular/core';
import { MatDialog }                    from '@angular/material';

import { ToasterService }               from 'angular2-toaster';

import { AbstractPageWithToaster }      from '../../../abstract/abstractPageWithToaster.component';
import { AppConfirmDialog }             from '../../../core/confirmdialog.component';
import { Contact }                      from '../../../model/contact';
import { ContactService }               from '../../../services/contact.service';

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

  constructor(
    private contactService: ContactService, 
    toasterService: ToasterService, 
    public dialog: MatDialog) {
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
  
  onDelete(contact: Contact) {
    const dialogRef = this.dialog.open(AppConfirmDialog,{
      height: '350px',
      data: {
        title: 'Confirm Delete',
        body: `Are you sure you want to delete ${contact.firstName}?`
      } });

    dialogRef.afterClosed().subscribe(result => {
      if( result === true ){
        this.delete(contact);
      }      
    });
  }
  delete(contact: Contact): void {
    this.loading = true;
    this.contactService.deleteContact(contact.id).subscribe(
      data => {
        this.loading = false; 
        this.contacts = this.contacts.filter( c => c !== contact);
        if( this.selectedContact === contact) { this.selectedContact = null; }
        this.ShowToaster('success', 'Success', `${contact.firstName} has been deleted!`);
      },
      error => {
        this.loading = false; 
        this.HandleError(error, "Delete Contact", "Unexpected error deleting contact");
      }
    )
  }
}
