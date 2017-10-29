import { Component, OnInit }          from '@angular/core';
import { ToasterService }             from 'angular2-toaster';
import { MatDialog }                  from '@angular/material';

import { AbstractPage }               from '../../../abstract/abstract-page.component';
import { AppConfirmDialog }           from '../../../core/confirm-dialog.component';

import { CountryService }             from '../../../services/country.service';
import { Country }                    from '../../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent
  extends AbstractPage
  implements OnInit {

  countries: Country[];

  constructor(
    private countryService: CountryService,
    toasterService: ToasterService,
    private dialog: MatDialog ) {
    super(toasterService);
   }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.loading = true;
    this.countryService.getCountries().subscribe(
      data => {
        this.loading = false;
        this.countries = data;
      },
      error => {
        this.loading = false;
        this.HandleError('Country', error);
      }
    );
  }

  onDelete(country: Country) {
    const dialogRef = this.dialog.open(AppConfirmDialog, {
      height: '350px',
      data: {
        title: 'Confirm Delete',
        body: `Are you sure you want to delete ${country.countryName}?`
      } });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === true ) {
        this.delete(country);
      }
    });
  }

  delete(country: Country): void {
    this.loading = true;
    this.countryService.deleteCountry(country.id).subscribe(
      data => {
        this.loading = false;
        this.countries = this.countries.filter( c => c !== country);
        // if ( this.selectedCountry === country) { this.selectedContact = null; }
        this.ShowToaster('success', 'Success', `${country.countryName} has been deleted!`);
      },
      error => {
        this.loading = false;
        this.HandleError('Delete Country', error);
      }
    );
  }

}
