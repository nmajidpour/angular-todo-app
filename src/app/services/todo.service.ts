import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

const headers = { 'content-type': 'application/json'}  

@Injectable({
  providedIn: "root",
})
export class TodoService {
  url: string = "http://localhost:3000/todos";
  limit='?_limit=7';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.limit}`);
  }

  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, {'headers':headers});
  }
}
