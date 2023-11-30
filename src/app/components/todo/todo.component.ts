import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todoService: TodoService) {
  }
  editStatus: boolean = false;
  @Input('todoItem') todo!: { key: Date, done: boolean, text: string };
  // @Output() delete = new EventEmitter<Date>();
  // @Output() done = new EventEmitter<Date>();
  // @Output() edit = new EventEmitter<{ key: Date, text: string }>();

  deleteTodo(key: Date) {
    // this.delete.emit(key);
    this.todoService.delete(key);
  }

  toggleTodo(key: Date) {
    // this.done.emit(key);
    this.todoService.toggle(key);
  }


  editHandler(key: Date, text: string) {
    // this.edit.emit({key, text});
  }

}
