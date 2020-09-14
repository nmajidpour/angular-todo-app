import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

const headers = { "content-type": "application/json" };

@Injectable({
  providedIn: "root",
})
export class TodoService {
  url: string = "http://localhost:3000/todos";
  limit = "?_limit=7";

  constructor(private http: HttpClient) {}

  // fetches list of todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.limit}`);
  }

  // adds the todo to the list
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, { headers: headers });
  }

  // updates the status of todo
  completeTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.url + `/${todo.id}`, todo, { headers: headers });
  }

  // deletes the selected todo
  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.url + `/${todo.id}`, { headers: headers });
  }
}
