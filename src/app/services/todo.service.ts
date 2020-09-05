import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: "root",
})
export class TodoService {
  url: string = "https://jsonplaceholder.typicode.com/todos";
  limit='?_limit=5';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.limit}`);
  }

  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions);
  }
}
