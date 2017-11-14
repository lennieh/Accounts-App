import { Injectable }                 from '@angular/core';
import { HttpRequest, HttpResponse }  from '@angular/common/http';

import { environment }                from '../../../environments/environment';

@Injectable()
export class HttpCacheService {

  cacheEntries = new Array<CachedRequest>();

  constructor() { }

  /**
   *
   * @param req
   * Checks if we have a cached response for this request that isn;t expired
   * and if so returns it
   */
  get(req: HttpRequest<any>): HttpResponse<any> {
    for ( let i = 0; i < this.cacheEntries.length; i++ ) {
      if ( this.requestMatches(req, this.cacheEntries[i].request)) {
        const timeNow = new Date().getMilliseconds();
        if ( timeNow < this.cacheEntries[i].expiry) {
          return this.cacheEntries[i].response;
        } else {
          this.cacheEntries.splice(i, 1);
          return null;
        }
      }
    }
    return null;
  }

  /**
   *
   * @param req
   * @param resp
   * Adds the request and it's response to the cache
   */
  put(req: HttpRequest<any>, resp: HttpResponse<any>) {
    // check if it is cachable
    for ( let i = 0; i < environment.cacheableEndpoints.length; i++ ) {
      const epLen = environment.cacheableEndpoints[i].length;
      if ( environment.cacheableEndpoints[i] === req.url.substring(0, epLen)) {
        this.cacheEntries.push( new CachedRequest(req, resp));
        return;
      }
    }
  }

  private requestMatches(inReq: HttpRequest<any>, cacheRequest: HttpRequest<any> ): boolean {
    if ( inReq.url === cacheRequest.url ) {
          return true;
    }
    return false;
  }

  /**
   * invalidates cache entries that match this url
   * @param url
   */
  invalidate(url: string): void {
    for ( let i = 0; i < this.cacheEntries.length; i++ ) {
      if ( url === this.cacheEntries[i].request.url.substring(0, url.length)) {
          this.cacheEntries.splice(i, 1);
      }
    }
  }

  invalidateAll(): void {
    this.cacheEntries = [];
  }
}

export class CachedRequest {
  request: HttpRequest<any>;
  response: HttpResponse<any>;
  expiry: number;

  constructor(req: HttpRequest<any>, resp: HttpResponse<any>) {
    this.request = req;
    this.response = resp;
    this.expiry = new Date().getUTCMilliseconds() + environment.cacheExpiryMilliseconds;
  }
}


