import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserRequest } from '../models/UserRequest';
import { UserResponse } from '../models/UserResponse';
import { baseURLAuth } from '../shared/baseURLs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${baseURLAuth}/register`
    ,user);
  }

  public login(user: UserRequest): Observable<string> {
    return this.http.post(`${baseURLAuth}/login`
      ,user
      ,{responseType:'text'}/*  alterado o tipo padrão
      *  de responsta de JsonObj para Text
      *  devido o retorno da api 
      *  ser uma string (token) 
      */
    );
  }

  public getMe(): Observable<string> {
    return this.http.get(`${baseURLAuth}`
      ,{responseType:'text'}/*  alterado o tipo padrão
      *  de responsta de JsonObj para Text
      *  devido o retorno da api 
      *  ser uma string (username) 
      */
    );
  }
}