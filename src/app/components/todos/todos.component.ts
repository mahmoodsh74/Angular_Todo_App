import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos!: Array<{ key: Date, done: boolean, text: string }>;
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();

  deleteTodo(key: Date) {
    this.delete.emit(key);
  }

  toggleTodo(key: Date) {
    this.done.emit(key);
  }
}
