import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute}                  from '@angular/router';
import { Location }                       from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }                 from 'angular2-toaster';
import { MatDialog }                      from '@angular/material';

import { AbstractDynamicPageComponent }   from '../../../abstract/abstract-dynamic-page.component';
import { QuestionService }                from '../../../dynamic/question.service';
import { routerTransition }               from '../../../shared/router.animations';

import { Company }                        from '../../../model/company';
import { CompanyService }                 from '../../../services/company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class NewCompanyComponent
  extends AbstractDynamicPageComponent
  implements OnInit {

  constructor(
    private companyService: CompanyService,
    dialog: MatDialog,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(dialog, questionService, location, toasterService );
    this.formName = 'company';
  }

  ngOnInit() {
    this.getQuestions();
  }

  onSave(payload: any) {
    this.loading = true;
    this.saving = true;

    const company = this.prepareCompany(payload);

    this.companyService.createCompany(company)
        .subscribe(
          data => {
            this.loading = false;
            // this.company = data;
            this.ShowToaster('success', 'Company Added', `${company.companyName} successfully added!`);
            this.goBack();
          },
          error => {
            this.loading = false;
            this.HandleError('Add Company', error);
          }
        );
  }

  prepareCompany(payload: any): Company {
    const formModel = payload;

    const saveCompany: Company = {
      id: 0,
      companyName: formModel.companyName,
      mainAddress: {
        addressLine1: formModel.addressLine1,
        addressLine2: formModel.addressLine2,
        addressLine3: formModel.addressLine3,
        postTown: formModel.postTown,
        postCode: formModel.postCode,
      },
      companyRegistration: formModel.companyRegistration,
      vatNumber: formModel.vatNumber,
      invoicePrefix: formModel.invoicePrefix
    };
    return  saveCompany;
  }
}
