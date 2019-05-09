import { TestBed } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TodoDataService]
  }));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
});
