import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute}                    from '@angular/router';
import { Location }                         from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }                   from 'angular2-toaster';
import { MatDialog }                        from '@angular/material';

import { AbstractDynamicPageComponent }     from '../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                  from '../../../dynamic/question.service';
import { routerTransition }                 from '../../../shared/router.animations';

import { Contact }                          from '../../../model/contact';
import { ContactService }                   from '../../../services/contact.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class NewContactComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  constructor(
    private contactService: ContactService,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService );
    this.formName = 'contact';
   }

  ngOnInit(): void {
    this.getQuestions();
  }

  onSave(payload: any) {
    this.loading = true;
    this.saving = true;

    const contact = this.prepareContact(payload);

    this.contactService.createContact(contact)
        .subscribe(
          data => {
            this.loading = false;
            // this.contact = data;
            this.ShowToaster('success', 'Contact Added', `${contact.firstName} successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Contact', error);
          }
        );
  }

  prepareContact(payload: any): Contact {
    const formModel = payload;

    const saveContact: Contact = {
      id: 0,
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      role: formModel.role,
      email: formModel.email,
      phone: formModel.phone
    };
    return  saveContact;
  }
}
