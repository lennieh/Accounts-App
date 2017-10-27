import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap}  from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ToasterService }           from 'angular2-toaster';

import { AbstractPageWithToaster }  from '../../../abstract/abstractPageWithToaster.component';

import { Country }            from '../../../model/country';
import { CountryService }     from '../../../services/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent
  extends AbstractPageWithToaster
  implements OnInit {

  country: Country;

  loading = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location,
    toasterService: ToasterService) {
    super(toasterService);
   }

  ngOnInit(): void {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.countryService.getCountry(+params.get('id')))
        .subscribe(
          country => {
            this.loading = false;
            this.country = country;
          },
          error => {
            this.loading = false;
            this.HandleError('Edit Country', error);
        });
  }

  onSubmit() {
    this.loading = true;

    this.countryService.updateCountry(this.country)
      .subscribe(
        data => {
          this.loading = false;
          //         this.contact = data;
          this.ShowToaster('success', 'Country Updated', `${this.country.countryName} successfully updated!`);
          this.goBack();
        },
        error => {
          this.loading = false;
          this.HandleError('Edit Country', error);
        }
      );
  }

  goBack() {
    this.location.back();
  }
}
