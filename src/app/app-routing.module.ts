import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }                from './main/home/home.component';
import { ContactComponent }            from './contact/contact.component';
import { AboutComponent }               from './about/about.component';
import { ErrorComponent }               from './error/error.component';


const routes: Routes = [
  {path: 'main',      component: HomeComponent },
  {path: 'contact',  component: ContactComponent },
  {path: 'about',     component: AboutComponent },
  {path: '',          redirectTo: '/main', pathMatch: 'full'},
  {path: '**',        component: ErrorComponent, data: { error: 'Page Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes, 
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
