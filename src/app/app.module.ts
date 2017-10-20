import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';

import { CoreModule }         from './core/core.module';
import { SharedModule }       from './shared/shared.module';

import { MainModule }         from './main/main.module';
import { ContactComponent }   from './contact/contact.component';
import { AboutComponent }     from './about/about.component';
import { ErrorComponent }     from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
