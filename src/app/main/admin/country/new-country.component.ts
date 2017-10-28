import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute}            from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../../../abstract/abstractPageWithToaster.component';

import { Country }                  from '../../../model/country';
import { CountryService }           from '../../../services/country.service';

// import { DynamicFormComponent }     from '../../../generate/dynamic-form/dynamic-form.component';
// import { DynamicFormQuestionComponent } from '../../../generate/dynamic-form/dynamic-form-question.component';

import { QuestionService }          from '../../../generate/question.service';
import { QuestionBase }             from '../../../generate/model/question-base';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss']
})
export class NewCountryComponent
  extends AbstractPageWithToaster
  implements OnInit {

  loading = false;

  constructor(
    private countryService: CountryService,
    private location: Location,
    private questionService: QuestionService,
    toasterService: ToasterService) {
    super(toasterService);
   }

   questions: QuestionBase<any>[];

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.loading = true;

    this.questionService.getQuestions().subscribe(
      questions => {
        this.loading = false;
        this.questions = questions;
      },
      error => {
        this.loading = false;
        this.HandleError('New Country', error );
      }
    );
  }

  onSave(payload: any) {
    this.loading = true;

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

  goBack() {
    this.location.back();
  }
}
