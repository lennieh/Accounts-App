import { Injectable }               from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }           from '@angular/router';

import { AuthService }              from './auth.service';

/**
 * Abstract AuthGuard class - extend this and supply a role in the constructor
 */
abstract class AbstractAuthGuard implements CanActivate {

        protected role: string;

        constructor(private authService: AuthService, private router: Router) {
        }

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            const url: string = state.url;
            return this.checkLogin(url);
        }

        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            return this.canActivate(route, state);
        }

        private checkLogin(url: string): boolean {

            if (this.authService.isLoggedIn ) {
                if (this.authService.isInRole(this.role)) {
                    return true;
                }
                return false;
            }

            // not logged in
            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
            return false;
        }
    }

/**
 * Provides CanActivate Guard for Admin functions
 */
@Injectable()
export class AuthGuardAdmin
    extends AbstractAuthGuard
    implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router);
        this.role = 'admin';
    }
}

/**
 * Provides CanActivate Guard for User functions
 */
@Injectable()
export class AuthGuardUser
    extends AbstractAuthGuard
    implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router);
        this.role = 'user';
    }
}

/**
 * Provides CanActivate Guard for View-Only role
 */
@Injectable()
export class AuthGuardView
    extends AbstractAuthGuard
    implements CanActivate {

    constructor(authService: AuthService, router: Router) {
        super(authService, router);
        this.role = 'view';
    }
}
