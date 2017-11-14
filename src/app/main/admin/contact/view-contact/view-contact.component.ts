import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap}          from '@angular/router';
import { Location }                         from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }                   from 'angular2-toaster';
import { MatDialog }                        from '@angular/material';

import { AbstractDynamicPageComponent }     from '../../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                  from '../../../../dynamic/services/question.service';
import { routerTransition }                 from '../../../../shared/router.animations';

import { Contact }                          from '../../../../model/contact';
import { ContactService }                   from '../../../../services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class ViewContactComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  contact: Contact;
  formData: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService);
    this.formName = 'contact';
   }

  ngOnInit(): void {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.contactService.getContact(+params.get('id')))
        .subscribe(
          contact => {
            this.loading = false;
            this.contact = contact;
            this.setFormData();
            this.getQuestions();
          },
          error => {
            this.loading = false;
            this.HandleError('Edit Contact', error);
        });
  }

  setFormData(): void {
    this.formData = {
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      role: this.contact.role,
      email: this.contact.email,
      phone: this.contact.phone
    };
  }

}
