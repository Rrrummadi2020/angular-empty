import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const logginInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Request is going to the folowing URL: Rama', req.url);
    return next(req).pipe(
        tap((e) => {
            if (e.type == HttpEventType.Response) {
                console.log('Server responsed with status ', e.status);
            }
        })
    );
};
