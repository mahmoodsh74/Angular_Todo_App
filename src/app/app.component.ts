import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";
import {TodoModel} from "./shared/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  todos: TodoModel[] = [];

  // addTodo(todo: string) {
  //   this.todos = [
  //     ...this.todos,
  //     {key: Date.now(), done: false, text: todo}
  //   ]
  // }



}
