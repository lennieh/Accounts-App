import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';

import { Error }    from '../model/error';
/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch(errorReponse => {
                let errMsg: Error;
                if (errorReponse instanceof HttpErrorResponse) {
                    const err = errorReponse.message || JSON.stringify(errorReponse.error);
                    errMsg = {
                       status: errorReponse.status.toString(),
                       message: `${errorReponse.statusText || ''} Details: ${err}`
                    };
                } else {
                   // errMsg = errorReponse.message ? errorReponse.message : errorReponse.toString();
                   errMsg = {
                    status: errorReponse.status,
                    message: errorReponse.body.error
                   };
                }
                return _throw(errMsg);
            });
    }
}

/**
 * Provider POJO for the interceptor
 */
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};