import { Component, OnInit }            from '@angular/core';
import { HostBinding }                  from '@angular/core';
import { ActivatedRoute, ParamMap}      from '@angular/router';
import { Location }                     from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { MatDialog }                    from '@angular/material';
import { ToasterService }               from 'angular2-toaster';

import { QuestionService }              from '../../../generate/question.service';
import { slideInDownAnimation }         from '../../animations';

import { Vat }                          from '../../../model/vat';
import { VatService }                   from '../../../services/vat.service';
import { AbstractDynamicPageComponent } from '../../../abstract/abstract-dynamic-page.component';

@Component({
  selector: 'app-edit-vat',
  templateUrl: './edit-vat.component.html',
  styleUrls: ['./edit-vat.component.scss'],
  animations: [slideInDownAnimation]
})
export class EditVatComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  vat: Vat;
  formData: any;

  constructor(
    private vatService: VatService,
    private route: ActivatedRoute,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService);
    this.formName = 'vat';
   }

  ngOnInit(): void {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.vatService.getVat(+params.get('id')))
        .subscribe(
          vat => {
            this.loading = false;
            this.vat = vat;
            this.setFormData();
            this.getQuestions();
          },
          error => {
            this.loading = false;
            this.HandleError('Edit VAT Rate', error);
        });
  }

  setFormData(): void {
    this.formData = {
      startDate: this.vat.startDate,
      vatRate: this.vat.vatRate,
      notes: this.vat.notes
    };
  }

  prepareVat(payload: any): void {
    const formModel = payload;
    this.vat.startDate = formModel.startDate;
    this.vat.vatRate = formModel.vatRate;
    this.vat.notes = formModel.notes;
  }

  onSave(payload: any) {
    this.loading = true;
    this.saving = true;

    this.prepareVat(payload);

    this.vatService.updateVat(this.vat)
      .subscribe(
        data => {
          this.loading = false;
          //         this.vat = data;
          this.ShowToaster('success', 'Vat Rate Updated', `VAT Rate successfully updated!`);
          this.goBack();
        },
        error => {
          this.loading = false;
          this.HandleError('Edit Vat Rate', error);
        }
      );
  }
}
