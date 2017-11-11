import { Component, OnInit }          from '@angular/core';
import { HostBinding }                from '@angular/core';
import { ToasterService }             from 'angular2-toaster';
import { MatDialog }                  from '@angular/material';
import { DataSource }                 from '@angular/cdk/collections';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { slideInDownAnimation }       from '../../animations';
import { AbstractPageComponent }      from '../../../abstract/abstract-page.component';
import { AppConfirmDialogComponent }  from '../../../shared/confirm-dialog/confirm-dialog.component';

import { CountryService }             from '../../../services/country.service';
import { Country }                    from '../../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  animations: [slideInDownAnimation]
})
export class CountryComponent
  extends AbstractPageComponent
  implements OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  displayedColumns = ['countryCode', 'countryName', 'actions'];
  countries: Country[];
  dataSource: CountryDataSource;

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
        this.dataSource = new CountryDataSource(this.countries);
      },
      error => {
        this.loading = false;
        this.HandleError('Country', error);
      }
    );
  }

  onDelete(country: Country) {
    const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
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

export class CountryDataSource extends DataSource<any> {

    constructor(private data: Country[]) {
      super();
    }

    connect(): Observable<Country[]> {
      return Observable.of(this.data);
    }

    disconnect() {}

}
