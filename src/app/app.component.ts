import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        AsyncPipe,
        ReactiveFormsModule,
        ReactiveFormComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'ng-2024-12';
    user$: Observable<{ title: string }> = new Observable();

    userServce: UserService = inject(UserService);

    ngOnInit(): void {
        this.user$ = this.userServce.getUser();
    }

    name = new FormControl('rama');

    getName() {
        console.log(this.name.valid);
        console.log(this.name.value);
    }
}
