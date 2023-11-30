import {Component, EventEmitter, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styleUrls: ['./form-add-todo.component.css']
})
export class FormAddTodoComponent {
  constructor(private todoService:TodoService) {
  }
  textTodo!: string;
  // @Output('add') addTodo = new EventEmitter<string>();

  onSubmit() {
    if (this.textTodo.length > 0) {
      // this.addTodo.emit(this.textTodo);
      this.todoService.add(this.textTodo);
      this.textTodo = '';
    }
  }

}
