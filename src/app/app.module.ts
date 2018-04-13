import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { RecaptchaModule } from 'ng-recaptcha';

import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from '../pages/home/homepage.component';
import { ContactComponent } from '../pages/contact/contact.component';

let routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ComponentsModule,
    DirectivesModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    SimpleNotificationsModule.forRoot({
      position: ['top', 'right'],
      timeOut:  3000,
      icons:    {
        alert:    '<i class="toast-icon fas fa-info"></i>',
        error:    '<i class="toast-icon fas fa-exclamation-triangle"></i>',
        info:     '<i class="toast-icon fas fa-info"></i>',
        warn:     '<i class="toast-icon fas fa-exclamation"></i>',
        success:  '<i class="toast-icon fas fa-check"></i>'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
