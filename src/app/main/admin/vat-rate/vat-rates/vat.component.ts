import { Component, OnInit }          from '@angular/core';
import { DataSource }                 from '@angular/cdk/collections';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ToasterService }             from 'angular2-toaster';
import { MatDialog }                  from '@angular/material';

import { AbstractPageComponent }      from '../../../../abstract/abstract-page.component';
import { AppConfirmDialogComponent }  from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { routerTransition }           from '../../../../shared/router.animations';

import { Vat }                        from '../../../../model/vat';
import { VatService }                 from '../../../../services/vat.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class VatComponent
  extends AbstractPageComponent
  implements OnInit {

  displayedColumns = ['startDate', 'vatRate', 'actions'];
  vat: Vat[];
  dataSource: VatDataSource;

  constructor(
    private vatService: VatService,
    public dialog: MatDialog,
    toasterService: ToasterService) {
    super(toasterService);
   }

  ngOnInit() {
    this.getVat();
  }

  getVat(): void {
    this.loading = true;
    this.vatService.getVats().subscribe(
      data => {
        this.loading = false;
        this.vat = data;
        this.dataSource = new VatDataSource(this.vat);
      },
      error => {
        this.loading = false;
        this.HandleError('Vat', error);
      }
    );
  }

  onDelete(vat: Vat) {
    const dialogRef = this.dialog.open(AppConfirmDialogComponent, {
      height: '350px',
      data: {
        title: 'Confirm Delete',
        body: `Are you sure you want to delete this vat rate?`
      } });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === true ) {
        this.delete(vat);
      }
    });
  }

  delete(vat: Vat): void {
    this.loading = true;
    this.vatService.deleteVat(vat.id).subscribe(
      data => {
        this.loading = false;
        this.vat = this.vat.filter( c => c !== vat);
        this.ShowToaster('success', 'Success', `Vat Rate has been deleted!`);
      },
      error => {
        this.loading = false;
        this.HandleError('Delete Vat', error);
      }
    );
  }
}

export class VatDataSource extends DataSource<any> {

  constructor(private data: Vat[]) {
    super();
  }

  connect(): Observable<Vat[]> {
    return Observable.of(this.data);
  }

  disconnect() {}
}