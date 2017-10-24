import { Injectable }           from '@angular/core';
import { HttpErrorResponse }    from '@angular/common/http';

@Injectable()
export class LoggerService {

  constructor() { }

  logHttpError(source: string, error: HttpErrorResponse): void {
    console.log(source + ": Error: " + error.status + " " + error.message);
    //TODO: write to remote log
  }
}
