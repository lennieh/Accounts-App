import { Toast, ToasterService }        from 'angular2-toaster';
import { FriendlyError }                from '../model/friendly-error';

import { QuestionService }              from '../dynamic/question.service';
import { QuestionBase }                 from '../dynamic/model/question-base';

export abstract class AbstractPageComponent {
  protected loading = false;

  constructor(private toasterService: ToasterService) {
  }

  protected ShowToaster(type: string, title: string, body: string) {
    const toast: Toast = {
        type: type,
        title: title,
        body: body
    };

    this.toasterService.pop(toast);
  }

  protected HandleError(page: string, error: FriendlyError) {
    this.ShowToaster('error', `${page}: Error ${error.status}`, `${error.message} => ${error.details}`);
  }
}
