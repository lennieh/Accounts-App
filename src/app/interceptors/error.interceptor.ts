import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';

import { environment }          from '../../environments/environment';
import { LoggerService }        from '../core/logger.service';

import { FriendlyError }        from '../model/friendly-error';

/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch(errorReponse => {
                const loggerService = this.injector.get(LoggerService);

                let errMsg: FriendlyError;
                if (errorReponse instanceof HttpErrorResponse) {
                    // protect against recursion
                    if ( req.url !== environment.loggerServiceEndpoint ) {
                        // log to server
                        loggerService.logHttpError( errorReponse.url, errorReponse);
                    }
                    // make a friendly message for UI
                    const err = errorReponse.message || JSON.stringify(errorReponse.error);
                    errMsg = {
                       status: errorReponse.status.toString(),
                       message: `${errorReponse.statusText || ''}`,
                       details: `${err}`
                    };
                } else {
                   // protect against recursion
                   // log to server
                   if ( req.url !== environment.loggerServiceEndpoint ) {
                     loggerService.logError(req.url, errorReponse.body.error);
                   }
                   errMsg = {
                    status: errorReponse.status,
                    message: errorReponse.statusText,
                    details: errorReponse.body.error
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
