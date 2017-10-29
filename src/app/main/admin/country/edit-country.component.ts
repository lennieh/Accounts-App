import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap}  from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractEditPage }         from '../../../abstract/abstract-edit-page.component';

import { QuestionBase }             from '../../../generate/model/question-base';
import { QuestionService }          from '../../../generate/question.service';

import { Country }                  from '../../../model/country';
import { CountryService }           from '../../../services/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent
  extends AbstractEditPage
  implements OnInit {

  country: Country;
  formData: any;
  
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(questionService, location, toasterService);
    this.formName = 'country';
   }

  ngOnInit(): void {
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
    }
  }

  onSave(payload: any) {
    this.loading = true;

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
