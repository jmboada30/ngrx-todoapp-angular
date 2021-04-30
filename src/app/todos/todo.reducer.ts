import { createReducer, on, Action } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  deleted,
  toggleAll,
  deleteCompleted,
} from './todo.actions';
import { Todo } from './models/todo.model';

const initialState: Todo[] = [
  new Todo('Aprender Redux'),
  new Todo('Practicar AdonisV5'),
  new Todo('Pagar deudas'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
  }),

  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, text };
    });
  }),

  on(deleted, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completed }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    });
  }),

  on(deleteCompleted, (state) => state.filter(({ completed }) => !completed))
);
