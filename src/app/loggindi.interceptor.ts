import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpInterceptorFn,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class LogginDiInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('Di based interceptor invoked');

        return next.handle(req);
    }
}
