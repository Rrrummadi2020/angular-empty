import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms';
interface LoginForm {
    email: FormControl<string>;
    password?: FormControl<string>;
}

@Component({
    selector: 'app-type-reactive-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './type-reactive-form.component.html',
    styleUrl: './type-reactive-form.component.scss',
})
export class TypeReactiveFormComponent {
    // login = new FormGroup<LoginForm>({
    //     email: new FormControl('', { nonNullable: true }),
    //     password: new FormControl('', { nonNullable: true }),
    // });
    fb = new FormBuilder();

    login = this.fb.nonNullable.group({
        email: [''],
        password: [''],
    });
    removeContol() {}
}
