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

  country: Country;

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
    this.country = new Country();
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

  onSubmit() {
    this.loading = true;

    this.countryService.createCountry(this.country)
        .subscribe(
          data => {
            this.loading = false;
            this.country = data;
            this.ShowToaster('success', 'Country Added', `${this.country.countryName} successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Country', error);
          }
        );
  }

  goBack() {
    this.location.back();
  }
}
