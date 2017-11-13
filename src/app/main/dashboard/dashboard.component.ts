import { Component }  from '@angular/core';

import { routerTransition }   from '../../shared/router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class DashboardComponent {

  dashboardEntries: DashboardPanel[] = [
    { title: 'Job Entry', description: 'Enter new jobs', url: '/main/jobentry', icon: 'build'},
    { title: 'Send Invoices', description: 'Generate Invoices for new jobs', url: '/main/sendinvoices', icon: 'attach_money'},
    { title: 'New Customer', description: 'Enter new customer details', url: '/main/customer/new', icon: 'group_add'},
    { title: 'New Talent', description: 'Enter new talent', url: '/main/newtalent', icon: 'person_add'},
    { title: 'Send Remittances', description: 'Generate new remittances', url: '/main/sendremittances', icon: 'send'},
    { title: 'Reports', description: 'Generate Reports', url: '/main/reports', icon: 'description'}
  ];
  constructor() { }

}

export class DashboardPanel {
  title: string;
  description: string;
  url: string;
  icon: string;
}
