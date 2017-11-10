import { Injectable }                                           from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable }                                           from 'rxjs/Observable';

import { AuthService }                                          from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = this.auth.getAuthorizationHeader();

    // if the service doesn't have a header just send the request anyway
    if ( authHeader ===  '') {
        return next.handle(req);
    }

    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}

/**
 * Provider POJO for the interceptor
 */
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
