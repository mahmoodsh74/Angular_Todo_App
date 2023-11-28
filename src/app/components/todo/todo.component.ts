import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  editStatus: boolean = false;
  @Input('todoItem') todo!: { key: Date, done: boolean, text: string };
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();
  @Output() edit = new EventEmitter<{ key: Date, text: string }>();

  deleteTodo(key: Date) {
    this.delete.emit(key);
  }

  toggleTodo(key: Date) {
    this.done.emit(key);
  }

  editHandler(key: Date, text: string) {
    this.edit.emit({key, text});
  }

}
