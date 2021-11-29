import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutComponent } from './about/about.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BookYourTicketsComponent } from './book-your-tickets/book-your-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    AboutComponent,
    ChangePasswordComponent,
    BookYourTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
