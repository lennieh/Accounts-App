import { Component, OnInit, Input }         from '@angular/core';

import { Contact }                          from '../../../model/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @Input() contact: Contact;

}