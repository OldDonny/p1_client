import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../users/users.service';

@Injectable()
export class SubsService {
static api: string = 'api/subs'

  constructor(private http: HttpClient) { }

  getFollowingUsers(id: number): Observable<any> {
    return this.http
      .get(`${SubsService.api}/${id}`)
  }
  getFollowingChirps(id: number): Observable<any> {
    return this.http
      .get(`${SubsService.api}/${id}`)
  }

  newFollow(follow: {followerid: number, followingid: number}): Observable<any> {
    return this.http
      .post(SubsService.api, follow)
  }
  unFollow(follow): Observable<any> {
    return this.http
      .delete(SubsService.api, follow)
  }

}
