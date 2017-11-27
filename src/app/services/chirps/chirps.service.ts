import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'

@Injectable()
export class ChirpsService {

  static api: string = '/api/chirps'

  constructor(private http: HttpClient) { }

  getChirps(): Observable<any>{
    return this.http
      .get(ChirpsService.api)
  }

  getChirp(id: number): Observable<any>{
    return this.http
      .get(`${ChirpsService.api}/${id}`)
  }
  
  createChirp(chirp: {username: string, message: string}): Observable<any> {
    return this.http
      .post(ChirpsService.api, chirp)
  }

  deleteChirp(id:number): Observable<any> {
    return this.http
      .delete(`${ChirpsService.api}/${id}`)
  }
}

  