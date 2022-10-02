import { Component } from '@angular/core';
import { UserRequest } from './models/UserRequest';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Auth';
  user = new UserRequest();

  constructor(private authService: AuthService){}

  register(user:UserRequest){
    this.authService.register(user).subscribe();
  }

  login(user:UserRequest){
    this.authService.login(user).subscribe(
      (token : string) => {
        localStorage.setItem('authToken', token);
      }
    );
  }

  getMe(){
    this.authService.getMe().subscribe(
      (name : string) => {
        console.log(name);
      }
    );
  }
}
