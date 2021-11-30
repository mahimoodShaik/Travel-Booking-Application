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
import { TejMahalComponent } from './tej-mahal/tej-mahal.component';
import { CharminarComponent } from './charminar/charminar.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { MysorePalaceComponent } from './mysore-palace/mysore-palace.component';
import { GoaComponent } from './goa/goa.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { IndiaGateComponent } from './india-gate/india-gate.component';

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
    BookYourTicketsComponent,
    TejMahalComponent,
    CharminarComponent,
    KeralaComponent,
    MumbaiComponent,
    MysorePalaceComponent,
    GoaComponent,
    RajasthanComponent,
    IndiaGateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
