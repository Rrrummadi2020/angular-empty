import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
    userForm = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        address: new FormGroup({
            village: new FormControl(''),
        }),
    });

    onSubmit() {
        const value = this.userForm.value;
        console.log(value);
    }
}
