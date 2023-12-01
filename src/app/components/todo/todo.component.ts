import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {TodoModel} from "../../shared/todo.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todoService: TodoService) {
  }
  editStatus: boolean = false;
  @Input('todoItem') todo!: TodoModel;
  // @Output() delete = new EventEmitter<Date>();
  // @Output() done = new EventEmitter<Date>();
  // @Output() edit = new EventEmitter<{ key: Date, text: string }>();

  deleteTodo(key: number) {
    // this.delete.emit(key);
    // @ts-ignore
    this.todoService.delete(key);
  }

  toggleTodo(key: number) {
    // this.done.emit(key);
    // @ts-ignore
    this.todoService.toggle(key);
  }


  editHandler(key: number, text: string) {
    // this.edit.emit({key, text});
  }

}
