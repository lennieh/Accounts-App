import { Component, OnInit }        from '@angular/core';
import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../abstract/abstractPageWithToaster.component';
import { Contact }                  from '../model/contact';
import { ContactService }           from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent 
  extends AbstractPageWithToaster 
  implements OnInit {

  loading: boolean = false;
  contacts: Contact[];
  
  constructor(private contactService: ContactService, toasterService: ToasterService) { 
    super(toasterService);
  }

  ngOnInit() {
    this.getContacts();
  }

  private getContacts(): void {
    this.loading = true;
    var contacts = this.contactService.getContacts().subscribe(
      data => {
        this.contacts = data;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.HandleError(error, 'Contact', 'Unexpected Error fetching contacts');
      }
    );
    
  }
}
