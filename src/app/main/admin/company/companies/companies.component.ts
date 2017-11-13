import { Component, OnInit }            from '@angular/core';
import { HostBinding }                  from '@angular/core';
import { MatDialog }                    from '@angular/material';
import { DataSource }                   from '@angular/cdk/collections';
import { Observable }                   from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ToasterService }               from 'angular2-toaster';

import { AbstractPageComponent }        from '../../../../abstract/abstract-page.component';
import { AppConfirmDialogComponent }    from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { routerTransition }             from '../../../../shared/router.animations';

import { Company }                      from '../../../../model/company';
import { CompanyService }               from '../../../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  animations: [routerTransition()]
})
export class CompaniesComponent
  extends AbstractPageComponent
  implements OnInit {

  @HostBinding('@routerTransition') routerTransition = '';

  companies: Company[];
  dataSource: CompanyDataSource;
  displayedColumns = ['name', 'actions'];

  constructor(
    private companyService: CompanyService,
    toasterService: ToasterService,
    public dialog: MatDialog ) {
      super(toasterService);
    }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.loading = true;
    this.companyService.getCompanies().subscribe(
      data => {
        this.loading = false;
        this.companies = data;
        this.dataSource = new CompanyDataSource(this.companies);
      },
      error => {
        this.loading = false;
        this.HandleError('Companies', error);
      }
    );
  }

  onDelete(company: Company) {
    const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
      height: '350px',
      data: {
        title: 'Confirm Delete',
        body: `Are you sure you want to delete ${company.companyName}?`
      } });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === true ) {
        this.delete(company);
      }
    });
  }

  delete(company: Company): void {
    this.loading = true;
    this.companyService.deleteCompany(company.id).subscribe(
      data => {
        this.loading = false;
        this.companies = this.companies.filter( c => c !== company);
        this.ShowToaster('success', 'Success', `${company.companyName} has been deleted!`);
      },
      error => {
        this.loading = false;
        this.HandleError('Delete Company', error);
      }
    );
  }
}

export class CompanyDataSource extends DataSource<any> {

  constructor(private data: Company[]) {
    super();
  }

  connect(): Observable<Company[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}
