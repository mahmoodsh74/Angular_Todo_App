import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: any[] = [];

  addTodo(todo: string) {
    this.todos = [
      ...this.todos,
      {key: Date.now(), done: false, text: todo}
    ]
  }

  deleteTodo(key: Date) {
    this.todos = this.todos.filter(item => item.key !== key);
  }
}
