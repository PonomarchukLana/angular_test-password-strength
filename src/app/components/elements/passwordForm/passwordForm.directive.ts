import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passStrongRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_~])[A-Za-z\d@$!%*#?&_~]*$/;
const passMediumRegex: RegExp = /^(?=.*[a-zA-Z@$!%*#?&_~])(?=.*[a-zA-Z\d])(?=.*[\d@$!%*#?&_~])[a-zA-Z\d@$!%*#?&_~]*$/;
const passEasyRegex: RegExp = /^[a-zA-Z\d@$!%*#?&_~]*$/;
const unwantedSymbol: RegExp = /[{}[\]()<>\\*\\/|=+-.,`'";:]/g;

export function passСomplexity(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!control.value || control.value.length < 8) {
      return null;
    }
console.log(control)
    const valueToCheck = value.replace(unwantedSymbol, '');

    switch (true) {
      case passStrongRegex.test(valueToCheck):
        return null;
      case passMediumRegex.test(valueToCheck):
        return { medium: true };
      case passEasyRegex.test(valueToCheck):
        return { easy: true };
      default:
        return null;
    }
  }
}
