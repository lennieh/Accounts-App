import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { HttpClientModule }               from '@angular/common/http';

import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';

// API Mocking
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { CoreModule }                     from './core/core.module';
import { SharedModule }                   from './shared/shared.module';
import { ContactService }                 from './contact/contact.service';
import { AboutService }                   from './about/about.service';

import { MainModule }                     from './main/main.module';
import { ContactComponent }               from './contact/contact.component';
import { AboutComponent }                 from './about/about.component';
import { ErrorComponent }                 from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent
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
  providers: [
    ContactService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
