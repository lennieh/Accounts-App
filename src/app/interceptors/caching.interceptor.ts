import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Injectable, Injector }       from '@angular/core';
import { Observable }                 from 'rxjs/Observable';
import { _throw }                     from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';

import { HttpCacheService }           from '../services/http-cache.service';
import { environment }                from '../../environments/environment';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor(private cache: HttpCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Before doing anything, it's important to only cache GET requests.
    // Skip this interceptor if the request method isn't GET.
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // First, check the cache to see if this request exists.
    const cachedResponse = this.cache.get(req);
    if (cachedResponse) {
      // A cached response exists. Serve it instead of forwarding
      // the request to the next handler.
      return Observable.of(cachedResponse);
    }

    // No cached response exists. Go to the network, and cache
    // the response when it arrives.
    return next.handle(req).do(event => {
      // Remember, there may be other events besides just the response.
      if (event instanceof HttpResponse) {
        // Update the cache.
        this.cache.put(req, event);
      }
    });
  }
}

/**
 * Provider POJO for the interceptor
 */
export const CachingInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CachingInterceptor,
    multi: true,
};

