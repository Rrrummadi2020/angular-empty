import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
    HTTP_INTERCEPTORS,
    provideHttpClient,
    withFetch,
    withInterceptors,
    withInterceptorsFromDi,
} from '@angular/common/http';

import { logginInterceptor } from './loggin.interceptor';
import { LogginDiInterceptor } from './loggindi.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(
            withInterceptorsFromDi(),
            withInterceptors([logginInterceptor]),
            withFetch()
        ),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LogginDiInterceptor,
            multi: true,
        },
    ],
};
