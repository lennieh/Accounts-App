import { Toast, ToasterService }        from 'angular2-toaster';
import { Error }                        from '../model/error';

export abstract class AbstractPageWithToaster
{
    constructor(private toasterService: ToasterService)
    {}

    protected ShowToaster(type: string, title: string, body:string)
    {
      var toast : Toast = {
        type: type,
        title: title,
        body: body
      };
     
      this.toasterService.pop(toast);
    }

    protected HandleError(error: Error, page: string, body:string)
    {
        this.ShowToaster('error', `${page}:Status ${error.status}`, `${body} => ${error.message}`);
    }
}