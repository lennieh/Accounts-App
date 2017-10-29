import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute}            from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';
import { AbstractEditPage }         from '../../../abstract/abstract-edit-page.component';

import { QuestionService }          from '../../../generate/question.service';
import { QuestionBase }             from '../../../generate/model/question-base';

import { Country }                  from '../../../model/country';
import { CountryService }           from '../../../services/country.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss']
})
export class NewCountryComponent
  extends AbstractEditPage
  implements OnInit {

  constructor(
    private countryService: CountryService,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(questionService, location, toasterService);
    this.formName = 'country';
  }

  ngOnInit(): void {
    this.getQuestions();
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

}
