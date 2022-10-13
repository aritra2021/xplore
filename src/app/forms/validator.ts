import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenVersionValidator(): ValidatorFn { 
    
    // '1.0      true
    // '1.1.0    true
    // '1        true
    // '1.       false
    // '1.a      false
    // '1.1.1.1  false

    return (control: AbstractControl): ValidationErrors | null => {
        const reg = /^[0-9]((\.)[0-9]){0,2}$/;
        const forbidden = !reg.test(control.value);
        return forbidden ? {forbiddenVersion: {value: control.value}} : null;
    };    
}