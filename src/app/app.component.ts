import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TypeReactiveFormComponent } from './type-reactive-form/type-reactive-form.component';
import { TempDrivenComponent } from './temp-driven/temp-driven.component';
import { AuthService } from './auth.service';
import { FakeAuthService } from './fake-auth.service';
import { HeaderComponent } from './header/header.component';
import { appConfig } from './app.config';
import { ForbiddenNameDirective } from './forbidden-name.directive';
const APP_CONFIG = Object.freeze({ port: 9090 });

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        AsyncPipe,
        ReactiveFormsModule,
        ReactiveFormComponent,
        TypeReactiveFormComponent,
        HeaderComponent,
        TempDrivenComponent,
        ForbiddenNameDirective,
    ],
    providers: [
        { provide: AuthService, useClass: AuthService },
        { provide: 'APP_CONFIG', useValue: APP_CONFIG },
        { provide: 'IS_TEST', useValue: true },
        {
            provide: FakeAuthService,
            useFactory: (isTest: Boolean) =>
                isTest ? new FakeAuthService() : new AuthService(),
            deps: ['IS_TEST'],
        },
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'ng-2024-12';
    isLogin: boolean = false;
    user$: Observable<{ title: string }> = new Observable();

    userServce: UserService = inject(UserService);
    authService: AuthService = inject(AuthService);
    constructor(@Inject('APP_CONFIG') appConfig: any) {
        console.log(appConfig);
    }

    ngOnInit(): void {
        this.user$ = this.userServce.getUser();
    }

    getAuthStatus() {
        this.isLogin = this.authService.isLogin;
    }

    name = new FormControl('rama');

    getName() {
        console.log(this.name.valid);
        console.log(this.name.value);
    }
}
