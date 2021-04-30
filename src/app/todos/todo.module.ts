import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
