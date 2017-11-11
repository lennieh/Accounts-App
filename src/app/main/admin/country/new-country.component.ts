import { Component, OnInit }          from '@angular/core';
import { HostBinding }                from '@angular/core';
import { AfterViewInit, ViewChild }   from '@angular/core';
import { ActivatedRoute}              from '@angular/router';
import { Location }                   from '@angular/common';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ToasterService }             from 'angular2-toaster';
import { MatDialog }                  from '@angular/material';

import { CanDeactivateGuard }         from '../../../core/services/can-deactivate-guard.service';
import { AppConfirmDialogComponent }  from '../../../shared/confirm-dialog/confirm-dialog.component';

import { AbstractEditPageComponent }  from '../../../abstract/abstract-edit-page.component';
import { slideInDownAnimation }       from '../../animations';
import { QuestionService }            from '../../../generate/question.service';
import { QuestionBase }               from '../../../generate/model/question-base';
import { DynamicFormComponent }       from '../../../generate/dynamic-form/dynamic-form.component';

import { Country }                    from '../../../model/country';
import { CountryService }             from '../../../services/country.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss'],
  animations: [slideInDownAnimation]
})
export class NewCountryComponent
  extends AbstractEditPageComponent
  implements OnInit, AfterViewInit, CanDeactivateGuard {

  @ViewChild(DynamicFormComponent)
  private dynamicFormComponent: DynamicFormComponent;

  @HostBinding ('@routeAnimation') routeAnimation = true;

  saving = false;

  constructor(
    private countryService: CountryService,
    private dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(questionService, location, toasterService);
    this.formName = 'country';
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  onSave(payload: any) {
    this.loading = true;
    this.saving = true;

    const country = this.prepareCountry(payload);

    this.countryService.createCountry(country)
        .subscribe(
          data => {
            this.loading = false;
            this.ShowToaster('success', 'Country Added', `${country.countryName} successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Country', error);
          }
        );
  }

  prepareCountry(payload: any): Country {
    const formModel = payload;

    const saveCountry: Country = {
      id: 0,
      countryCode: formModel.countryCode,
      countryName: formModel.countryName
    };
    return  saveCountry;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

    if (this.dynamicFormComponent.form.pristine || this.saving) {
      return true;
    }

    const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
      height: '350px',
      data: {
        title: 'Confirm Discard',
        body: `Are you sure you want to discard your changes?`
      }
    });

    return dialogRef.afterClosed();
  }
}
