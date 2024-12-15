import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
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
        name: [''],
        age: [''],
        address: this.formBuilder.group({
            village: [''],
        }),
    });

    onSubmit() {
        const value = this.userForm.value;
        console.log(value);
    }
}
