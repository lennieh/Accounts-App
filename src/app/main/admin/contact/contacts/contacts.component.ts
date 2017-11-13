import { Component, OnInit }              from '@angular/core';
import { DataSource }                     from '@angular/cdk/collections';
import { Observable }                     from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ToasterService }                 from 'angular2-toaster';
import { MatDialog }                      from '@angular/material';

import { AbstractPageComponent }          from '../../../../abstract/abstract-page.component';
import { AppConfirmDialogComponent }      from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { routerTransition }               from '../../../../shared/router.animations';

import { Contact }                        from '../../../../model/contact';
import { ContactService }                 from '../../../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class ContactsComponent
  extends AbstractPageComponent
  implements OnInit {

  contacts: Contact[];
  dataSource: ContactDataSource;
  displayedColumns = ['name', 'actions'];

  constructor(
    private contactService: ContactService,
    toasterService: ToasterService,
    public dialog: MatDialog) {
    super(toasterService);
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
        this.dataSource = new ContactDataSource(this.contacts);
      },
      error => {
        this.loading = false;
        this.HandleError('Contacts', error);
      }
    );
  }

  onDelete(contact: Contact) {
    const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
      height: '350px',
      data: {
        title: 'Confirm Delete',
        body: `Are you sure you want to delete ${contact.firstName}?`
      } });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === true ) {
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
        this.ShowToaster('success', 'Success', `${contact.firstName} has been deleted!`);
      },
      error => {
        this.loading = false;
        this.HandleError('Delete Contact', error);
      }
    );
  }
}

export class ContactDataSource extends DataSource<any> {

  constructor(private data: Contact[]) {
    super();
  }

  connect(): Observable<Contact[]> {
    return Observable.of(this.data);
  }

  disconnect() {}

}
