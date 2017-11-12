import { Component, OnInit }                from '@angular/core';
import { Router }                           from '@angular/router';
import { BreakpointObserver, Breakpoints }  from '@angular/cdk/layout';

import { ToasterService }                   from 'angular2-toaster';
import { MatSidenav }                       from '@angular/material';

import { RoleMenuService }                  from '../core/services/role-menu.service';
import { RoleMenu, MenuGroup, MenuItem }    from '../model/role-menu';
import { AbstractPageComponent }            from '../abstract/abstract-page.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent 
  extends AbstractPageComponent
  implements OnInit {

  currentPage: string;
  sidenavMode: string;
  sidenavOpened: string;
  sidenavDisableClose: string;
  mobileMenu: boolean;

  mainMenu: MenuGroup[];

  constructor(
    private router: Router, 
    private breakpointObserver: BreakpointObserver,
    private roleMenuService: RoleMenuService,
    toasterService: ToasterService ) {

      super(toasterService);
      breakpointObserver.observe(['(max-width:959px)']).subscribe(
        result => {
          if (result.matches) {
            this.activateHandsetLayout();
          } else {
            this.activateWebLayout();
          }
        });

      this.getMenu();
   }

  ngOnInit() {
      // responsive stuff 
      this.currentPage = 'Dashboard';
      if ( this.breakpointObserver.isMatched('(max-width: 959px;)')) {
        this.activateHandsetLayout();
      } else {
        this.activateWebLayout();
      }
      this.router.events.subscribe()
  }

  getMenu(): void {
    this.loading = true;
    this.roleMenuService.getMenuItems().subscribe(
      data => { 
        this.loading = false;
        this.mainMenu = data[0].menuGroups; },
      error => {
        this.loading = false;
        this.HandleError('Main Menu', error);
      }
    );

  }

  activateHandsetLayout() {
    this.sidenavMode = 'over';
    this.sidenavOpened = 'false';
    this.sidenavDisableClose = 'false';
    this.mobileMenu = true;
  }

  activateWebLayout() {
    this.sidenavMode = 'side';
    this.sidenavOpened = 'true';
    this.sidenavDisableClose = 'true';
    this.mobileMenu = false;
  }

  goto(route: string, title: string) {
    this.currentPage = title;
    this.router.navigate([`main/${route}`]);
  }

}
