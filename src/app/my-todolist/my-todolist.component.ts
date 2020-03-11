import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-my-todolist',
  templateUrl: './my-todolist.component.html',
  styleUrls: ['./my-todolist.component.css']
})
export class MyTodolistComponent implements OnInit {
  title = 'My To-Do List';
  tasks: any[] = [
    {id: 1, name: 'Task One'},
    {id: 2, name: 'Task Two'}
   
  ];
  constructor() {  }
    ngOnInit(){

    }
    addTask(id: HTMLInputElement, name: HTMLInputElement) {
       this.tasks.push({id: id.value, name: name.value});
        id.value = '';
        name.value = '';
    }

    taskDelete(task){
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index,1)
    }
    


}