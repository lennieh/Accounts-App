import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minValueValidator(minValue: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        return control.value < minValue ? {'minValue': {value: control.value}} : null;
      };
}

export function maxValueValidator(maxValue: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        return control.value > maxValue ? {'maxValue': {value: control.value}} : null;
      };
}
