import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, ParamMap}        from '@angular/router';
import { Location }                       from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }                 from 'angular2-toaster';
import { MatDialog }                      from '@angular/material';

import { AbstractDynamicPageComponent }   from '../../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                from '../../../../dynamic/services/question.service';
import { routerTransition }               from '../../../../shared/router.animations';

import { Company }                        from '../../../../model/company';
import { CompanyService }                 from '../../../../services/company.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ViewCompanyComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  company: Company;
  formData: any;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
      super(dialog, questionService, location, toasterService);
      this.formName = 'company';
     }

  ngOnInit() {
    this.loading = true;

    this.route.paramMap.switchMap((params: ParamMap) =>
      this.companyService.getCompany(+params.get('id')))
      .subscribe(
      company => {
        this.loading = false;
        this.company = company;
        this.setFormData();
        this.getQuestions();
      },
      error => {
        this.loading = false;
        this.HandleError('Edit Contact', error);
      });
  }

  setFormData(): void {
    this.formData = {
      companyName: this.company.companyName,
      addressLine1: this.company.mainAddress.addressLine1,
      addressLine2: this.company.mainAddress.addressLine2,
      addressLine3: this.company.mainAddress.addressLine3,
      postTown: this.company.mainAddress.postTown,
      postCode: this.company.mainAddress.postCode,
      companyRegistration: this.company.companyRegistration,
      vatNumber: this.company.vatNumber,
      invoicePrefix: this.company.invoicePrefix
    };
  }


}
