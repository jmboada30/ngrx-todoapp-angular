import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { ValidFilter } from '../filters/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter?: ValidFilter): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(({ completed }) => completed);
      case 'toDo':
        return todos.filter(({ completed }) => !completed);

      default:
        return todos;
    }
  }
}
