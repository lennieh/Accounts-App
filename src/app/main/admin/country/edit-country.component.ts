import { Component, OnInit }              from '@angular/core';
import { HostBinding }                    from '@angular/core';
import { AfterViewInit, ViewChild }       from '@angular/core';
import { ActivatedRoute, ParamMap}        from '@angular/router';
import { Location }                       from '@angular/common';
import { Observable }                     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MatDialog }                      from '@angular/material';
import { ToasterService }                 from 'angular2-toaster';

import { CanDeactivateGuard }             from '../../../core/services/can-deactivate-guard.service';
import { AppConfirmDialogComponent }      from '../../../shared/confirm-dialog/confirm-dialog.component';
import { AbstractDynamicPageComponent }   from '../../../abstract/abstract-dynamic-page.component';
import { slideInDownAnimation }           from '../../animations';
import { QuestionBase }                   from '../../../generate/model/question-base';
import { QuestionService }                from '../../../generate/question.service';
import { DynamicFormComponent }           from '../../../generate/dynamic-form/dynamic-form.component';

import { Country }                        from '../../../model/country';
import { CountryService }                 from '../../../services/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss'],
  animations: [slideInDownAnimation]
})
export class EditCountryComponent
  extends AbstractDynamicPageComponent
  implements CanDeactivateGuard, AfterViewInit, OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  saving = false;

  country: Country;
  formData: any;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService);
    this.formName = 'country';
   }

   ngOnInit(): void {
     this.loadCountry();
   }

  loadCountry(): void {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.countryService.getCountry(+params.get('id')))
        .subscribe(
          country => {
            this.loading = false;
            this.country = country;
            this.setFormData();
            this.getQuestions();
          },
          error => {
            this.loading = false;
            this.HandleError('Edit Country', error);
        });

  }

  setFormData(): void {
    this.formData = {
      countryCode: this.country.countryCode,
      countryName: this.country.countryName
    };
  }

  onSave(payload: any) {
    this.loading = true;
    this.saving = true;

    this.prepareCountry(payload);

    this.countryService.createCountry(this.country)
        .subscribe(
          data => {
            this.loading = false;
            this.ShowToaster('success', 'Country Update', `${this.country.countryName} successfully updated!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Edit Country', error);
          }
        );
  }

  prepareCountry(payload: any): void {
    const formModel = payload;
    this.country.countryCode = formModel.countryCode;
    this.country.countryName = formModel.countryName;
  }
}
