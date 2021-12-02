import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutComponent } from './about/about.component';
import { BookYourTicketsComponent } from './book-your-tickets/book-your-tickets.component';
import { TejMahalComponent } from './tej-mahal/tej-mahal.component';
import { CharminarComponent } from './charminar/charminar.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { MysorePalaceComponent } from './mysore-palace/mysore-palace.component';
import { GoaComponent } from './goa/goa.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { IndiaGateComponent } from './india-gate/india-gate.component';
import { MainComponent } from './main/main.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
 {path:'Home', component: HomeComponent},
 {path:'SignIn',component:SignInComponent},
 {path:'SignUp',component:SignUpComponent},
 {path:'Forgot Password',component:ForgotPasswordComponent},
 {path:'main',component:MainComponent},
 {path:'change password',component:ChangePasswordComponent},
 {path:'About',component:AboutComponent},
 {path:'book-your-tickets',component:BookYourTicketsComponent},
 {path:'TicketDetails',component:TicketDetailsComponent},
 {path:'TejMahal', component:TejMahalComponent},
 {path:'Charminar', component:CharminarComponent},
 {path:'Mumbai', component:MumbaiComponent},
 {path:'kerala', component:KeralaComponent},
 {path:'Mysore Palace', component:MysorePalaceComponent},
 {path:'Goa', component:GoaComponent},
 {path:'Rajasthan', component:RajasthanComponent},
 {path:'IndiaGate', component:IndiaGateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent]