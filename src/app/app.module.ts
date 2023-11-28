import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormAddTodoComponent } from './components/form-add-todo/form-add-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormAddTodoComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
