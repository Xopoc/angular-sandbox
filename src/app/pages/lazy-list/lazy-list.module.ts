import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LazyListRoutingModule} from './lazy-list-routing.module';
import {LazyListComponent} from './lazy-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    LazyListRoutingModule
  ],
  declarations: [
    LazyListComponent,
    ListItemComponent
  ]
})
export class LazyListModule {
}
