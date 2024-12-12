import { HttpInterceptorFn } from '@angular/common/http';

export const logginInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Request is going to the folowing URL: ', req.url);
    return next(req);
};
