import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  task:string;
  @Output() addTodo : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }  

  // adds the todo in the list
  saveTask() {
    const todo = 
    {
      title : this.task,
      completed:false       
    }
    this.addTodo.emit(todo);
  }

}
