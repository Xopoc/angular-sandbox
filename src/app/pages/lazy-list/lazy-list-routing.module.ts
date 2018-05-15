import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyListComponent} from './lazy-list.component';
import {ListItemComponent} from './list-item/list-item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyListComponent,
  },
  {
    path: ':id',
    component: ListItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyListRoutingModule { }
