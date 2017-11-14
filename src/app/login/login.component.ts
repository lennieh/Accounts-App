import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { AuthService }        from '../core/services/auth.service';
import { HttpCacheService }   from '../core/services/http-cache.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  userRole: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private httpCache: HttpCacheService ) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in...';
    this.authService.login(this.userRole).subscribe(() => {
      this.setMessage();
      if ( this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'main/dashboard';
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.httpCache.invalidateAll();
  }
}
