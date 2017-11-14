import { Component }                        from '@angular/core';
import { Router }                           from '@angular/router';
import { ToasterService, ToasterConfig }    from 'angular2-toaster';

import { AuthService }                      from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Accounts-App';

  constructor(
    private toasterService: ToasterService,
    private router: Router,
    private authService: AuthService ) {
  }

  public toasterconfig: ToasterConfig = new ToasterConfig({
      showCloseButton: true,
      animation: 'slideDown',
      limit: 5
    });

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  username(): string {
    return this.authService.name;
  }
}
