import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userListGet() : Observable<UserResponse[]>{
    return this.http.get<UserResponse[]>(
      `${environment.baseURLAuth}/userslist`
    );
  }
}
