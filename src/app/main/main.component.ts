import { AfterViewInit, ViewChild }         from '@angular/core';
import { Component, OnInit }                from '@angular/core';
import { BreakpointObserver, Breakpoints }  from '@angular/cdk/layout';
import { MatSidenav }                       from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(MatSidenav)
  private sidenav: MatSidenav;

  sidenavMode: string;
  sidenavOpened: string;
  sidenavDisableClose: string;
  mobileMenu: boolean;

  seconds() { return ; }

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width:959px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      } else {
        this.activateWebLayout();
      }
    });
   }

  ngOnInit() {
      if ( this.breakpointObserver.isMatched('(max-width: 959px;)')) {
        this.activateHandsetLayout();
      } else {
        this.activateWebLayout();
      }
  }

  activateHandsetLayout() {
    // this.sidenav.mode = 'over';
    // this.sidenav.opened = false;
    // this.sidenav.disableClose = false;
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

}
