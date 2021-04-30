import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import * as actions from '../../../filters/filter.actions';
import { deleteCompleted } from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filterActived: actions.ValidFilter = 'all';
  filters: actions.ValidFilter[] = ['all', 'completed', 'toDo'];
  todoCount = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filterActived = state.filter;
      this.todoCount = state.todos.filter(({ completed }) => !completed).length;
    });
  }

  changeFilter(filter: actions.ValidFilter) {
    if (filter === this.filterActived) return;
    this.store.dispatch(actions.setFilter({ filter }));
  }

  deleteCompleted() {
    this.store.dispatch(deleteCompleted());
  }
}
