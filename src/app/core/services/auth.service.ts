import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  roles: string[] = [];
  redirectUrl: string;

  login(): Observable<boolean> {
    // todo: will capture the roles here with user credentials
   // this.roles.push('admin');
    // this.roles.push('user');
    this.roles.push('view');

    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getAuthorizationHeader(): string {
    return '';
  }

  getRole(): string {
    return this.roles ? this.roles[0] : '';
  }

  isInRole(role: string): boolean {

    // View-Only role is blank
    if ( role === '') {
      return true;
    }

    // otherwise search roles
    for ( let i = 0; i < this.roles.length; i++ ) {
      if ( this.roles[i] === role ) {
        return true;
      }
      return false;
    }
  }

}
