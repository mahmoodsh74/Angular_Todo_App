import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  @Input('text') textTodo!: string;
  @Output() edit = new EventEmitter<string>();

  editHandler() {
    if (this.textTodo.length>0){
      this.edit.emit(this.textTodo);
    }
  }
}
