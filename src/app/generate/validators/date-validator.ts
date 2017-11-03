import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minDateValidator(minDate: Date): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if ( control.value === '') {
            return null;
        }

        const thisDate = new Date(control.value).toISOString();
        const testDate = new Date(minDate).toISOString();
        return thisDate < testDate
            ? {'minDate': {value: control.value}}
            : null;
      };
}

export function maxDateValidator(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if ( control.value === '') {
            return null;
        }

        const thisDate = new Date(control.value).toISOString();
        const testDate = new Date(maxDate).toISOString();
        return thisDate > testDate
            ? {'maxDate': {value: control.value}}
            : null;
      };
}
