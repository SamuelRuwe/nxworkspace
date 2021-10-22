import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModel } from '../state/user/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private static getUrl() {
    return `${environment.userEndpoint}`;
  }

  addUser(user: UserModel) {
    return this.http.post<UserModel>(`${UserService.getUrl()}/add`, user);
  }

  editUser(user: UserModel) {
    return this.http.post<UserModel>(`${UserService.getUrl()}/edit`, user);
  }

  getAll() {
    return this.http.get<Array<UserModel>>(`${UserService.getUrl()}/all`);
  }

  deleteUser(id: number) {
    return this.http.post<number>(`${UserService.getUrl()}/delete`, id);
  }

}
