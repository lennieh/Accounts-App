import { Component }                        from '@angular/core';
import { ToasterService, ToasterConfig }    from 'angular2-toaster';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Accounts-App';
  
  constructor(private toasterService: ToasterService){

  }
  
  public toasterconfig : ToasterConfig = 
    new ToasterConfig({
      showCloseButton: true,
      animation: 'slideDown',
      limit: 5
    });
}
