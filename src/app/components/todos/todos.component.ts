import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  doneStatus: boolean = false;
  @Input() todos!: Array<{ key: Date, done: boolean, text: string }>;
  @Output() delete = new EventEmitter<Date>();
  @Output() done = new EventEmitter<Date>();
  @Output() edit = new EventEmitter<any>();

  get filterTodos() {
    return this.todos.filter(item => item.done === this.doneStatus);
  }

  get doneTodos() {
    return this.todos.filter(item => item.done === true);
  }

  get unDoneTodos() {
    return this.todos.filter(item => item.done === false);
  }

  deleteTodo(key: Date) {
    this.delete.emit(key);
  }

  toggleTodo(key: Date) {
    this.done.emit(key);
  }

  editHandler(todo: any) {
    this.edit.emit(todo);
  }


}
