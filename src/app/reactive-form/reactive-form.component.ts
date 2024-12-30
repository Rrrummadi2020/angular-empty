import { Component, inject } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validator,
    ValidatorFn,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
    formBuilder = inject(FormBuilder);

    userForm = this.formBuilder.group({
        name: ['',[Validators.required,this.forbiddenNameValidator(/bob/i)]],
        age: [''],
        address: this.formBuilder.group({
            village: [''],
        }),
        aliases: this.formBuilder.array([this.formBuilder.control('')]),
    });

    get aliases() {
        return this.userForm.get('aliases') as FormArray;
    }

    onSubmit() {
        const value = this.userForm.value;
        console.log(value);
    }

    addAliases() { 
        this.aliases.push(this.formBuilder.control(''))
    }

    forbiddenNameValidator(nameRegexp:RegExp) :ValidatorFn{ 
        return (control: AbstractControl) => { 
            if (nameRegexp.test(control.value)) {
                return { forbiddenName: { value: control.value } };
            } else { 
                return null;
            }
        }
    }
}
