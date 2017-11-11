import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { environment }                      from '../../../environments/environment';
import { LogError }                         from '../../model/log-error';

@Injectable()
export class LoggerService {

  private loggerUrl = environment.loggerServiceEndpoint;

  constructor(private http: HttpClient) { }

  /*
  ** Log an HttpErrorResponse
  */
  logHttpError(source: string, httpError: HttpErrorResponse): void {
    this.log('error', httpError.url, `${httpError.status} ${httpError.message}`);
  }

  logError(source: string, message: string): void {
    this.log('error', source, message);
  }

  logWarning(source: string, message: string): void {
    this.log('warning', source, message);
  }

  logInfo(source: string, message: string): void {
    this.log('warning', source, message);
  }

  log( severity: string, source: string, message: string ) {
    const logError = new LogError();

    logError.severity = severity;
    logError.source = source;
    logError.message = message;

    this.sendToLog(logError);
  }

  private sendToLog(logError: LogError)  {
    this.http.post<LogError>(this.loggerUrl, logError).subscribe(
      data => {},
      error => {
        console.log(`Error writing to log error status:[${error.status}] message:[${error.message}] details:[${error.details}]`);
      }
    );
  }

}
