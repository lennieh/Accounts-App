import { AbstractControl, ValidatorFn } from '@angular/forms';

// tslint:disable-next-line:max-line-length
const ukPostCodeRegex: RegExp = new RegExp('^ ?(([BEGLMNSWbeglmnsw][0-9][0-9]?)|(([A-PR-UWYZa-pr-uwyz][A-HK-Ya-hk-y][0-9][0-9]?)|(([ENWenw][0-9][A-HJKSTUWa-hjkstuw])|([ENSWensw][A-HK-Ya-hk-y][0-9][ABEHMNPRVWXYabehmnprvwxy])))) \s?[0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$');

export function regexValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        return regex.test(control.value) ? {'regex': {value: control.value}} : null;
      };
}

export function ukPostCodeValidator(): ValidatorFn {
    return regexValidator(ukPostCodeRegex);
}
