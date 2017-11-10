import { Component, OnInit }          from '@angular/core';
import { HostBinding }                from '@angular/core';
import { ActivatedRoute, ParamMap}    from '@angular/router';
import { Location }                   from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ToasterService }             from 'angular2-toaster';

import { slideInDownAnimation }       from '../../animations';
import { AbstractEditPageComponent }  from '../../../abstract/abstract-edit-page.component';
import { QuestionService }            from '../../../generate/question.service';

import { Company }                    from '../../../model/company';
import { CompanyService }             from '../../../services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
  animations: [slideInDownAnimation]
})
export class EditCompanyComponent
  extends AbstractEditPageComponent
  implements OnInit {

  @HostBinding ('@routeAnimation') routeAnimation = true;

  company: Company;
  formData: any;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    questionService: QuestionService,
    location: Location,
    toasterService: ToasterService) {
      super(questionService, location, toasterService);
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

  prepareCompany(payload: any): void {
    const formModel = payload;
    this.company.companyName = formModel.companyName;
    this.company.mainAddress.addressLine1 = formModel.addressLine1;
    this.company.mainAddress.addressLine2 = formModel.addressLine1;
    this.company.mainAddress.addressLine3 = formModel.addressLine1;
    this.company.mainAddress.postTown = formModel.postTown;
    this.company.mainAddress.postCode = formModel.postCode;
    this.company.companyRegistration = formModel.companyRegistration;
    this.company.vatNumber = formModel.vatNumber;
    this.company.invoicePrefix = formModel.invoicePrefix;
  }

  onSave(payload: any) {
    this.loading = true;
    this.prepareCompany(payload);

    this.companyService.updateCompany(this.company)
      .subscribe(
        data => {
          this.loading = false;
          //         this.contact = data;
          this.ShowToaster('success', 'Company Updated', `${this.company.companyName} successfully updated!`);
          this.goBack();
        },
        error => {
          this.loading = false;
          this.HandleError('Edit Company', error);
        }
      );
  }

}
