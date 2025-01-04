import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from '@angular/forms';

@Directive({
    selector: '[appForbiddenName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ForbiddenNameDirective,
            multi: true,
        },
    ],

    standalone: true,
})
export class ForbiddenNameDirective implements Validator {
    @Input() appForbiddenName: string = '';
    validate(control: AbstractControl): ValidationErrors | null {
        return this.appForbiddenName
            ? forbiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(
                  control
              )
            : null;
    }
    constructor() {}
}

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}
