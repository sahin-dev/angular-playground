import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  isLogin = signal(false);


  

  login() {
    this.isLogin.set(true);
    console.log('User logged in');
  }


}
