import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getAuthorizationHeader(): string {
    return '';
  }

  getRole(): string {
    return 'admin';
  }
}
