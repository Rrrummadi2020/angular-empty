import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenNameDirective } from '../forbidden-name.directive';

@Component({
    selector: 'app-temp-driven',
    standalone: true,
    imports: [FormsModule,ForbiddenNameDirective],
    templateUrl: './temp-driven.component.html',
    styleUrl: './temp-driven.component.scss',
})
export class TempDrivenComponent {
    actor = new Actor(1, 'Rama');
    @ViewChild('userForm') userForm: NgForm | undefined;

    onSubmit() {
        console.log(this.userForm);
    }
}

export class Actor {
    constructor(public id: number, public name: string) {}
}
