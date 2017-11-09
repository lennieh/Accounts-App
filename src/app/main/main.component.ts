import { Component, OnInit }                from '@angular/core';
import { Router }                           from '@angular/router';
import { BreakpointObserver, Breakpoints }  from '@angular/cdk/layout';
import { MatSidenav }                       from '@angular/material';

import { MenuGroup, MenuItem }              from '../model/menu-group';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentPage: string;
  sidenavMode: string;
  sidenavOpened: string;
  sidenavDisableClose: string;
  mobileMenu: boolean;

  mainMenu: MenuGroup[] = [
    {
      groupName: 'Admin',
      items: [
        { link: 'company', title: 'My Company Details' },
        { link: 'contacts', title: 'My Contact Details' },
        { link: 'vat', title: 'VAT Rates' },
        { link: 'country', title: 'Countries' }
      ]
    },
    {
      groupName: 'Customers',
      items: [
        { link: 'newcustomer', title: 'Add New Prospects' },
        { link: 'editcustomer', title: 'Existing Customers' }
      ]

    },
    {
      groupName: 'Talent',
      items: [
        { link: 'newtalent', title: 'Add New Talent/Engineer' },
        { link: 'edittalent', title: 'Existing Talent/Engineers' }
      ]
    },
    {
      groupName: 'Jobs',
      items: [
        { link: 'jobentry', title: 'Job Entry' },
        { link: 'jobsearch', title: 'Job Search' }
      ]
    },
    {
      groupName: 'Invoices',
      items: [
        { link: 'sendinvoices', title: 'Send Invoices' },
        { link: 'resendinvoices', title: 'Resend Invoices' },
        { link: 'viewinvoices', title: 'View Invoices' }
      ]
    },
    {
      groupName: 'Remittances',
      items: [
        { link: 'sendremittances', title: 'Send Remittances' },
        { link: 'resendremittances', title: 'Resend Remittances' },
        { link: 'viewremittances', title: 'View Remittances' }
      ]
    }
  ];

  seconds() { return ; }

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
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
      this.currentPage = 'Dashboard';
      if ( this.breakpointObserver.isMatched('(max-width: 959px;)')) {
        this.activateHandsetLayout();
      } else {
        this.activateWebLayout();
      }
      this.router.events.subscribe()
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
