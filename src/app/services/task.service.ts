import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from '../shared/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  userId=JSON.parse(localStorage.getItem('user') || '').uid
  constructor(private db: AngularFirestore) { }
  GetAllTasks(){
    return this.db.collection('user/'+this.userId+'/tasks/').snapshotChanges()
  }
  GetAllCompleted(){
    return this.db.collection('user/'+this.userId+'/completed/').snapshotChanges()
  }
  AddTask(task:Task){
    return new Promise<any>((resolve, reject) =>{
    this.db.collection('user/'+this.userId+'/tasks/')
           .doc(task.id).set(task)
           .then(res=>{},err => reject(err))
    })
  }
  deleteTask(id:string){
    this.db.collection('user/'+this.userId+'/tasks/')
            .doc(String(id)).delete().then(res=>{
            })
            .catch(err=>{
              this.deleteCompleted(String(id))
            })
  }
  deleteCompleted(id:string){
      this.db.collection('user/'+this.userId+'/completed/')
             .doc(String(id)).delete().then(res=>{
            })
            .catch(err=>{
              alert(err)
            })
  }
  ToggleStatus(id:string,status:boolean){
    this.db.collection('user/'+this.userId+'/tasks/')
        .doc(id)
        .update({completed:status})
  }
  clearCompleted(){
    this.db.collection('user/'+this.userId+'/completed')
    .get()
    .toPromise()
    .then(snap=>{
      snap.docs.map((doc:any)=>{
        doc.ref.delete()
      })
    })
  }
  AddToCompleted(){
    this.db.collection('user/'+this.userId+'/tasks',ref=>ref.where("completed","==",true))
    .get()
    .toPromise()
    .then(snap=>{
      snap.docs.map((doc:any)=>{
        var item=doc.data()
        this.db.collection('user/'+this.userId+'/completed/')
                .doc(item.id)
                .set(item)
        doc.ref.delete()
      })
    })
  }
}
