import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public taskList:any=[]
  public completedList:any=[]
  task:string=''
  touched:boolean=false
  constructor(public authService:FirebaseService,
              public router:Router,
              public taskService:TaskService,
            ) { }
  
  ngOnInit(): void {
    this.getAllTasks()
   this.getAllCompleted()
  }
  signOut(){
    this.authService.signout()
    this.router.navigate(['sign-in']);
  }
  getAllTasks(){
    this.taskService.GetAllTasks().subscribe(list=>{
      this.taskList=list
    })
  }
  getAllCompleted(){
    this.taskService.GetAllCompleted().subscribe(list=>{
      this.completedList=list
    })
  }
  toggleCompleted(event:any,status:boolean){
    this.taskService.ToggleStatus(event.target.id,!status) 
  }
  set(event:any){
    this.touched=false
  }
  add(){
    if(this.task.length<5){
      this.touched=true
      return
    }
    var data={id:uuidv4(),title:this.task,completed:false}
    this.task=''
    this.taskService.AddTask(data).then(res=>{ 
      this.touched=false
    })    
  }
  shiftToCompleted(){
    this.taskService.AddToCompleted()
  }
}
