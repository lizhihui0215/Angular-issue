import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Pager, Response } from './response';
import { SERVER_URL } from './server-url';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  private userURL: string;

  constructor(private http: HttpClient, @Inject(SERVER_URL) public serverURL: string) {
    this.userURL = `${serverURL}/user`;
  }

  usersByRoleId(roleId: number): Observable<Response<[User]>> {
    const url = `${this.userURL}/usersByRoleId/${roleId}`;
    return this.http.get<Response<[User]>>(url, {withCredentials: true});
  }

  usersById(userId: number, pageNum: number, pageSize: number): Observable<Response<Pager<User>>> {
    const url = `${this.userURL}/users/${userId}/${pageNum}/${pageSize}`;
    return this.http.get<Response<Pager<User>>>(url, {withCredentials: true});
  }

}
