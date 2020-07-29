import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {StoreModule} from "@ngrx/store";
import {UserStateReducer} from "./store/user-state.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    StoreModule.forRoot({userState: UserStateReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
