import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public email = '';
  public password = '';
  constructor(
    public authService: FirebaseService,
    public router: Router) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['']);
    }
  }
  signUp() {
    this.authService.signup(this.email, this.password).then(res => {
      this.router.navigate(['']);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          {
            alert("Email is already being used. Sign in or use different email.");
            break;
          }
        default:
          {
            alert("Unexpected Error. Please try again later.");
            break;
          }
      }
    })
  }
}
