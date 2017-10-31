import { Component, OnInit }  from '@angular/core';
import { MatDialog }          from '@angular/material';

import { ToasterService }     from 'angular2-toaster';
import { AbstractPage }       from '../../../abstract/abstract-page.component';
import { AppConfirmDialog }   from '../../../core/confirm-dialog.component';
import { Vat }                from '../../../model/vat';
import { VatService }         from '../../../services/vat.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent
  extends AbstractPage
  implements OnInit {

  vat: Vat[];

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
      },
      error => {
        this.loading = false;
        this.HandleError('Vat', error);
      }
    );
  }

  onDelete(vat: Vat) {
    const dialogRef = this.dialog.open(AppConfirmDialog, {
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
