import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap}  from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../../../../abstract/abstractPageWithToaster.component';

import { Contact }            from '../../../../model/contact';
import { ContactService }     from '../../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent 
  extends AbstractPageWithToaster
  implements OnInit {

  contact: Contact;

  loading = false;

  constructor(
    private contactService: ContactService, 
    private route: ActivatedRoute,
    private location: Location,
    toasterService: ToasterService) {
    super(toasterService)
   }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.contactService.getContact(+params.get('id')))
        .subscribe(
          contact => {
            this.loading = false;
            this.contact = contact
          },
          error => {
            this.loading = false;
            this.HandleError(error, "Edit Contact", "Unexpected Error loading contact");  
        });
  }

  onSubmit(){ 
    this.loading = true;

    if( this.contact.id > 0 )
    {
      this.contactService.updateContact(this.contact)
        .subscribe(
          data => { 
            this.loading = false;
            this.contact = data;
          },
          error => { 
            this.loading = false;
            this.HandleError(error, "Edit Contact", "Unexpected error updating Contact")
          }
        )
    }
    else {
      this.contactService.createContact(this.contact)
        .subscribe(
          data => {
            this.loading = false;
            this.contact = data;
          },
          error => {
            this.loading = false;
            this.HandleError(error, "Edit Contact", "Unexpected error creating new Contact");
          }
        )
    }
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
