import { Component, OnInit }          from '@angular/core';
import { HostBinding }                from '@angular/core';
import { ActivatedRoute}              from '@angular/router';
import { Location }                   from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }             from 'angular2-toaster';

import { slideInDownAnimation }       from '../../animations';
import { AbstractEditPageComponent }  from '../../../abstract/abstract-edit-page.component';
import { QuestionService }            from '../../../generate/question.service';

import { Company }                    from '../../../model/company';
import { CompanyService }             from '../../../services/company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
  animations: [slideInDownAnimation]
})
export class NewCompanyComponent
  extends AbstractEditPageComponent
  implements OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  constructor(
    private companyService: CompanyService,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
    super(questionService, location, toasterService );
    this.formName = 'company';
  }

  ngOnInit() {
    this.getQuestions();
  }

  onSave(payload: any) {
    this.loading = true;
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
