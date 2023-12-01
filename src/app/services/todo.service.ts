import {Injectable} from '@angular/core';
import {TodoModel} from "../shared/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {
  }

  todos: TodoModel[] = [
    // {key: 12345, done: false, text: 'new todo'}
  ];

  getTodos() {
    return this.todos;
  }

  add(todo: string) {
    this.todos.push(new TodoModel(Date.now(),todo,false));
  }

  delete(key: Date) {
    let indexTodo = this.todos.findIndex((todo: any) => todo.key === key);
    this.todos.splice(indexTodo,1);
    // this.todos = this.todos.filter((item:any) => item.key !== key);
  }

  toggle(key: Date) {
    let indexTodo = this.todos.findIndex((todo: any) => todo.key === key);
    this.todos[indexTodo].done = !this.todos[indexTodo].done;
    // this.todos = this.todos.map((item: any) => {
    //   if (item.key === key) {
    //     return {
    //       ...item,
    //       done: !item.done
    //     }
    //   }
    //   return item;
    // })
  }


  // @ts-ignore
  edit({key, text}) {

    let indexTodo = this.todos.findIndex((todo: any) => todo.key === key);
    this.todos[indexTodo].text = this.todos[indexTodo].text;

    // this.todos = this.todos.map((item: any) => {
    //   if (item.key === key) {
    //     return {
    //       ...item,
    //       text: text
    //     }
    //   }
    //   return item;
    // })
  }


}
