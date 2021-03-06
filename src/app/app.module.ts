import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { HttpClientModule }               from '@angular/common/http';

import { ToasterModule, ToasterService }  from 'angular2-toaster';
import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';

// API Mocking
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';

import { LoginRoutingModule }             from './login/login-routing.module';
import { CoreModule }                     from './core/core.module';
import { SharedModule }                   from './shared/shared.module';
import { MainModule }                     from './main/main.module';

import { ContactService }                 from './services/contact.service';
import { AboutService }                   from './services/about.service';

import { ContactComponent }               from './contact/contact.component';
import { AboutComponent }                 from './about/about.component';
import { ErrorComponent }                 from './error/error.component';
import { LoginComponent }                 from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ToasterModule,
    CoreModule,
    SharedModule,
    MainModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [
    ContactService,
    AboutService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
