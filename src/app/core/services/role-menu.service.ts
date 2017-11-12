import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http'
import { Observable }   from 'rxjs/Observable';

import { AuthService }  from './auth.service';
import { environment }  from '../../../environments/environment';
import { RoleMenu }     from '../../model/role-menu';

@Injectable()
export class RoleMenuService {

  private _endPoint = environment.roleMenuEndpoint;
  constructor(
    private http: HttpClient,
    private authService: AuthService ) { }

  getMenuItems(): Observable<RoleMenu[]> {
    const role = this.authService.getRole();
    return this.http.get<RoleMenu[]>(`${this._endPoint}?role=${role}`);
  }
}
