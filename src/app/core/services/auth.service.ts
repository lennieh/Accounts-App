import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  roles: string[] = [];
  name: string;
  redirectUrl: string;

  login(role: string): Observable<boolean> {
    this.roles.push('view');
    if ( role === 'user' || role === 'admin') {
      this.roles.push('user');
    }
    if ( role === 'admin') {
      this.roles.push('admin');
    }
    this.name = 'Lennie';

    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.name = '';
    this.roles = [];
    this.isLoggedIn = false;
  }

  getAuthorizationHeader(): string {
    return '';
  }

  getRole(): string {
    return this.roles ? this.roles[this.roles.length - 1] : '';
  }

  isInRole(role: string): boolean {

    // otherwise search roles
    for ( let i = 0; i < this.roles.length; i++ ) {
      if ( this.roles[i] === role ) {
        return true;
      }
      return false;
    }
  }

}
