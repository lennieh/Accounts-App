import { Component, OnInit }          from '@angular/core';
import { ToasterService }             from 'angular2-toaster';

import { AbstractPageWithToaster }    from '../abstract/abstractPageWithToaster.component';
import { About }                      from '../model/about';
import { AboutService }               from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent 
  extends AbstractPageWithToaster
  implements OnInit {

  aboutLines: About[];
  loading: boolean;

  constructor(private aboutService: AboutService, toasterService: ToasterService ) {
    super(toasterService);
   }

  ngOnInit() {
    this.getAboutData();
  }

  private getAboutData() : void {
    this.loading = true;
    this.aboutService.getAbout()
      .subscribe(
        data => {
          this.loading = false;
          this.aboutLines = data;
        },
        error => {
          console.log(error);
          this.loading = false;
          this.HandleError(error, 'About', 'Unexpected Error fetching About data');
        }

      )

  }
}
