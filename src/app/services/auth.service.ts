import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserRequest } from '../models/UserRequest';
import { UserResponse } from '../models/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.baseURLAuth}/register`
    ,user);
  }

  public login(user: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.baseURLAuth}/login`
    ,user);
  }

  public getMe(): Observable<string> {
    return this.http.get(`${environment.baseURLAuth}`
      ,{responseType:'text'}/*  alterado o tipo padrão
      *  de responsta de JsonObj para Text
      *  devido o retorno da api 
      *  ser uma string (username) 
      */
    );
  }
}