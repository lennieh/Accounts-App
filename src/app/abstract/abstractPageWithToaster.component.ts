import { Toast, ToasterService }       from 'angular2-toaster';

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

    protected HandleError(title: string, body:string)
    {
        this.ShowToaster('error', title, body);
    }
}