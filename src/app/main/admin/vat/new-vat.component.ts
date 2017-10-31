import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute}            from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';
import { AbstractEditPage }         from '../../../abstract/abstract-edit-page.component';

import { QuestionService }          from '../../../generate/question.service';

import { Vat }                      from '../../../model/vat';
import { VatService }               from '../../../services/vat.service';

@Component({
  selector: 'app-new-vat',
  templateUrl: './new-vat.component.html',
  styleUrls: ['./new-vat.component.scss']
})
export class NewVatComponent
  extends AbstractEditPage
  implements OnInit {

  constructor(
    private vatService: VatService,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(questionService, location, toasterService );
    this.formName = 'vat';
   }

  ngOnInit(): void {
    this.getQuestions();
  }

  onSave(payload: any) {
    this.loading = true;
    const vat = this.prepareVat(payload);

    this.vatService.createVat(vat)
        .subscribe(
          data => {
            this.loading = false;
            // this.contact = data;
            this.ShowToaster('success', 'Vat Rate Added', `VAT Rate successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Vat Rate', error);
          }
        );
  }

  prepareVat(payload: any): Vat {
    const formModel = payload;

    const saveVat: Vat = {
      id: 0,
      startDate: formModel.startDate,
      vatRate: formModel.vatRate,
      notes: formModel.notes
    };
    return  saveVat;
  }

}
