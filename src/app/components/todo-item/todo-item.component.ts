import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
  }

  // saves the status of the todo as completed/uncompleted
  completeTodo(todo: Todo)
  {
    todo.completed = !todo.completed;
    this.todoService.completeTodo(todo).subscribe();
  }
}
