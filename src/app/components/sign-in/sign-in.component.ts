import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public email='';
  public password='';
  constructor(
    public authService:FirebaseService,
    public router:Router){ 
      if(localStorage.getItem('user')){
        this.router.navigate(['']);
      }
  }
  signIn(){
    this.authService.signin(this.email,this.password).then(res=>{
      this.router.navigate(['']);
    })
    .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            {
              alert("User with email does not exist.");
              break;
            }
          case "auth/wrong-password":
            {
              alert("Wrong password.");
              break;
            }
          case "auth/user-not-found":
          {
            alert("User not found. Please check email and password.");
            break;
          }
          case 'auth/user-disabled': {
            alert('Sorry your user is disabled.');
            break;
          }
            default:
          {
              alert("Unexpected Error");
              break;
          }
      }
    })
  }
}
