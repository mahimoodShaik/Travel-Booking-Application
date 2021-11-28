import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PlacesToVisitComponent } from './places-to-visit/places-to-visit.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'SignIn',component:SignInComponent},
 {path:'SignUp',component:SignUpComponent},
 {path:'Forgot Password',component:ForgotPasswordComponent},
 {path:'places-to-visit',component:PlacesToVisitComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent]