import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../state/user/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private static getUrl() {
    return `${environment.userEndpoint}`;
  }

  getAll() {
    return this.http.get<Array<User>>(`${UserService.getUrl()}all`);
  }

}
