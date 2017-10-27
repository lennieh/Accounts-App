import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute}            from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../../../abstract/abstractPageWithToaster.component';

import { Contact }            from '../../../model/contact';
import { ContactService }     from '../../../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent
  extends AbstractPageWithToaster
  implements OnInit {

  contact: Contact;

  loading = false;

  constructor(
    private contactService: ContactService,
    private location: Location,
    toasterService: ToasterService) {
    super(toasterService);
   }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  onSubmit() {
    this.loading = true;

    this.contactService.createContact(this.contact)
        .subscribe(
          data => {
            this.loading = false;
            this.contact = data;
            this.ShowToaster('success', 'Contact Added', `${this.contact.firstName} successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Contact', error);
          }
        );
  }

  goBack() {
    this.location.back();
  }
}
