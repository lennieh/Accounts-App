import { Component, Inject }        from '@angular/core';
import { MAT_DIALOG_DATA }          from '@angular/material';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: 'confirmdialog.component.html'

})
export class AppConfirmDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any ){
        if( data.title === '')
            data.title = 'Confirm?';
        if( data.body === '')
            data.body = 'Are You Sure?';
        if( data.no === '')
            data.no = 'No';
        if( data.yes === '' )
            data.yes = 'Yes';
    }
}
