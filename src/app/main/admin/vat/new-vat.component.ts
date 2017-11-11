import { Component, OnInit }              from '@angular/core';
import { HostBinding }                    from '@angular/core';
import { ActivatedRoute}                  from '@angular/router';
import { Location }                       from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }                 from 'angular2-toaster';
import { MatDialog }                      from '@angular/material';

import { AbstractDynamicPageComponent }   from '../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                from '../../../generate/question.service';
import { slideInDownAnimation }           from '../../animations';

import { Vat }                            from '../../../model/vat';
import { VatService }                     from '../../../services/vat.service';

@Component({
  selector: 'app-new-vat',
  templateUrl: './new-vat.component.html',
  styleUrls: ['./new-vat.component.scss'],
  animations: [slideInDownAnimation]
})
export class NewVatComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  constructor(
    private vatService: VatService,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService );
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
