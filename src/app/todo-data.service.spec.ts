import { TestBed } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  let service: TodoDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TodoDataService] });
    service = TestBed.get(TodoDataService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addTodo', () => {
    let beforeId: number;
    beforeEach(() => {
      beforeId = service.lastId;
    });

    it('increment the todo ID', () => {
      service.addTodo(new Todo());
      expect(service.lastId).toEqual(beforeId + 1);
    });

    it('should add to the Todos array', () => {
      service.addTodo(new Todo());
      expect(service.getAllTodos().length).toEqual(1)
    });
  });

});
