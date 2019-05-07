import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service'
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'note-taking';
  
  constructor(private todoDataService: TodoDataService) {
  };

  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
