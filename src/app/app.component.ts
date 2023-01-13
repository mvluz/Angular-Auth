import { Component} from '@angular/core';
import { UserRequest } from './models/UserRequest';
import { UserResponse } from './models/UserResponse';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Auth';
  user = new UserRequest();
  userList:  UserResponse[]=[];

  constructor(
    private authService: AuthService
    ,private userService: UserService
  ){}

  register(user:UserRequest){
    this.authService.register(user).subscribe();
  }

  login(user:UserRequest){
    this.authService.login(user).subscribe();
  }

  getMe(){
    this.authService.getMe().subscribe(
      (name : string) => {
        console.log(name);
      }
    );
  }

  userListGet(){
    this.userService.userListGet().subscribe(
      (result: UserResponse[]) => (this.userList=result)
    );
  }
}