import { createAction, props } from '@ngrx/store';

export type ValidFilter = 'all' | 'completed' | 'toDo';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: ValidFilter }>()
);
