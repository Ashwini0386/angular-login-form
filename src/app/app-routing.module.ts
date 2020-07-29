import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginFormComponent} from "./login-form/login-form.component";


const routes: Routes = [
  {
    path: 'welcome',
    component:WelcomeComponent
  },
  {
    path: '',
    component: LoginFormComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {initialNavigation: 'enabled'}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
