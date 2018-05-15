import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationToolbarModule} from './components/navigation-toolbar/navigation-toolbar.module';
import { HomeComponent } from './pages/home/home.component';
import { SimpleComponent } from './pages/simple/simple.component';
import { SimpleIdComponent } from './pages/simple-id/simple-id.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationToolbarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleComponent,
    SimpleIdComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
