import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SimpleComponent} from './pages/simple/simple.component';
import {SimpleIdComponent} from './pages/simple-id/simple-id.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple-page',
    pathMatch: 'full',
    component: SimpleComponent
  },
  {
    path: 'simple-id/:id',
    component: SimpleIdComponent
  },
  {
    path: 'lazy-loaded',
    pathMatch: 'full',
    loadChildren: 'src/app/pages/lazy/lazy.module#LazyModule',
  },
  {
    path: 'lazy-loaded-list',
    loadChildren: 'src/app/pages/lazy-list/lazy-list.module#LazyListModule',
  },
  // {
  //   path: '**',
  //   redirectTo: '/'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
