import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false
  constructor(public fireAuth:AngularFireAuth,private router:Router) { 
    if(localStorage.getItem('user')){
      this.isLoggedIn=true
    }
  }
  async signin(email:string,password:string){
    await this.fireAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate([''])
    })
    .catch(err=>{
      throw err
    })
  }
  async signup(email:string,password:string){
    await this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.router.navigate([''])
    })
    .catch(err=>{
      throw err
    })
  }
  signout(){
    this.fireAuth.signOut()
    this.isLoggedIn=false
    localStorage.removeItem('user')
    this.router.navigate(['sign-in'])
  }
}
