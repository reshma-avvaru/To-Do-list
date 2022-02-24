import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'to-do-list';
  public signIn:boolean;
  public signOut:boolean;
  public signUp:boolean;
  constructor(private authService:FirebaseService,private router:Router){
      this.signIn=false;
      this.signUp=false;
      this.signOut=true;
    router.events.subscribe((url:any)=>{
      if(url.url==='/sign-in'){
        this.signIn=false;
        this.signUp=true;
        this.signOut=false;
      }
      else if(url.url==='/sign-up'){
        this.signIn=true;
        this.signUp=false;
        this.signOut=false;
      }
      else if(url.url==='/'){
        this.signIn=false;
        this.signUp=false;
        this.signOut=true;
      }
    })
  }

  signout(){
    this.signIn=false;
    this.signUp=true;
    this.signOut=false;
    this.authService.signout()
  }
}
