import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap}  from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../../../abstract/abstractPageWithToaster.component';

import { Contact }            from '../../../model/contact';
import { ContactService }     from '../../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent 
  extends AbstractPageWithToaster
  implements OnInit {

  contact: Contact;

  loading = false;

  constructor(
    private contactService: ContactService, 
    private route: ActivatedRoute,
    private location: Location,
    toasterService: ToasterService) {
    super(toasterService);
   }

  ngOnInit(): void {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.contactService.getContact(+params.get('id')))
        .subscribe(
          contact => {
            this.loading = false;
            this.contact = contact;
          },
          error => {
            this.loading = false;
            this.HandleError('Edit Contact', error);
        });
  }

  onSubmit() {
    this.loading = true;

    this.contactService.updateContact(this.contact)
      .subscribe(
        data => {
          this.loading = false;
          //         this.contact = data;
          this.ShowToaster('success', 'Contact Updated', `${this.contact.firstName} successfully updated!`);
          this.goBack();
        },
        error => {
          this.loading = false;
          this.HandleError('Edit Contact', error);
        }
      );
  }

  goBack() {
    this.location.back();
  }
}
