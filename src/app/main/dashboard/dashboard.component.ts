import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardEntries: DashboardPanel[] = [
    { title: 'Job Entry', description: 'Enter new jobs', url: '/main/jobentry', icon: 'build'},
    { title: 'Send Invoices', description: 'Generate Invoices for new jobs', url: '/main/sendinvoices', icon: 'attach_money'},
    { title: 'New Customer', description: 'Enter new customer details', url: '/main/newcustomer', icon: 'group_add'},
    { title: 'New Talent', description: 'Enter new talent', url: '/main/newtalent', icon: 'person_add'},
    { title: 'Send Remittances', description: 'Generate new remittances', url: '/main/sendremittances', icon: 'send'},
    { title: 'Reports', description: 'Generate Reports', url: '/main/reports', icon: 'description'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

export class DashboardPanel {
  title: string;
  description: string;
  url: string;
  icon: string;
}
