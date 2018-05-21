import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationToolbarModule} from './components/navigation-toolbar/navigation-toolbar.module';
import {HomeComponent} from './pages/home/home.component';
import {SimpleComponent} from './pages/simple/simple.component';
import {SimpleIdComponent} from './pages/simple-id/simple-id.component';
import {AppSsrRenderDirective} from './directives/app-ssr-render.directive';
import {AppSsrNoRenderDirective} from './directives/app-ssr-no-render.directive';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    NavigationToolbarModule,
    BrowserTransferStateModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleComponent,
    SimpleIdComponent,
    AppSsrRenderDirective,
    AppSsrNoRenderDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
