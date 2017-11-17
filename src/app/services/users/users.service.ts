import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
static api: string = 'http://loacalhost:3000/api/users'


  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http
      .get(UsersService.api)
  }
  getUser(id:number):Observable<any>{
    return this.http
      .get(`${UsersService.api}/${id}`)
  }
  createUser(user: {username:string, email:string, password:string}):Observable<any>{
    return this.http.post(UsersService.api, user)
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${UsersService.api}/${id}`)
  }
}
