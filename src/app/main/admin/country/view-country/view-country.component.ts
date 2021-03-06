import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, ParamMap}        from '@angular/router';
import { Location }                       from '@angular/common';
import { Observable }                     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MatDialog }                      from '@angular/material';
import { ToasterService }                 from 'angular2-toaster';

import { AbstractDynamicPageComponent }   from '../../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                from '../../../../dynamic/services/question.service';
import { routerTransition }               from '../../../../shared/router.animations';

import { Country }                        from '../../../../model/country';
import { CountryService }                 from '../../../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class ViewCountryComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

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

}
