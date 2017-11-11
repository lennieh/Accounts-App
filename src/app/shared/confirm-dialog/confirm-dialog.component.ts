import { Component, Inject }        from '@angular/core';
import { MAT_DIALOG_DATA }          from '@angular/material';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
    styleUrls: ['confirm-dialog.component.scss']
})
export class AppConfirmDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any ) {
        if ( data.title === '') {
            data.title = 'Confirm?';
        }
        if ( data.body === '') {
            data.body = 'Are You Sure?';
        }
        if ( data.no === '') {
            data.no = 'No';
        }
        if ( data.yes === '' ) {
            data.yes = 'Yes';
        }
    }
}
