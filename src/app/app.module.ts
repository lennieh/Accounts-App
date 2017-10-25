import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { HttpClientModule }               from '@angular/common/http';

import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';

import { ErrorInterceptorProvider }       from './interceptors/error.interceptor';

// API Mocking
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { CoreModule }                     from './core/core.module';
import { SharedModule }                   from './shared/shared.module';
import { ContactService }                 from './services/contact.service';
import { AboutService }                   from './services/about.service';

import { MainModule }                     from './main/main.module';
import { ContactComponent }               from './contact/contact.component';
import { AboutComponent }                 from './about/about.component';
import { ErrorComponent }                 from './error/error.component';
import { AppConfirmDialog }               from './core/confirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    AppConfirmDialog
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    CoreModule,
    SharedModule,
    MainModule,
    AppRoutingModule
  ],
  entryComponents: [
    AppConfirmDialog
  ],
  providers: [
    ContactService,
    AboutService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
