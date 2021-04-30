import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { ValidFilter } from './filters/filter.actions';
import { filterReducer } from './filters/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: ValidFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
