import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, ValidFilter } from './filter.actions';

const initialState: ValidFilter = 'all';

export const filterReducer = createReducer<ValidFilter>(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
