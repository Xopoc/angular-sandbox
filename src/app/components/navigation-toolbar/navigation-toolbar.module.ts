import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationToolbarComponent} from './navigation-toolbar.component';
import {MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  declarations: [
    NavigationToolbarComponent
  ],
  exports: [
    NavigationToolbarComponent
  ]
})
export class NavigationToolbarModule {
}
