import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserState} from "../store/user-state.reducer";
import {select, Store} from "@ngrx/store";
import {StoreState} from "../store/user-state.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  userName: string;
  password: string;
  userState: Observable<UserState>;
  customErrormsg: string;

  constructor(private router: Router, private store: Store<{userState: UserState}>) {
    this.userState = store.pipe(select('userState'));
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl(this.userName, [Validators.required, Validators.minLength(4), Validators.maxLength(6), this.regexMatcher(/^[a-zA-Z]+$/, 'Username must not contain digits or special characters.'), this.forbiddenUserName('Ash')]),
      'password': new FormControl(this.password, [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  regexMatcher(pattern: RegExp, errorMessage: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const onlyAlphabets = pattern.test(control.value)
      if (!onlyAlphabets) {
        this.customErrormsg = errorMessage;
        return {'RegexMatcherError': {value: control.value}};
      }
      //return null;
    };
  }

  forbiddenUserName(forbiddenName: string): ValidatorFn {
    return(control: AbstractControl) :ValidationErrors | null => {
      const nameHasForbiddenName = (control.value && control.value.toString().toLowerCase().includes(forbiddenName.toLowerCase()));
      return nameHasForbiddenName ? {'ForbiddenNameError': {value: control.value}} : null;
    };
  }

  onSubmit() {
    const userState = new UserState();
    userState.userName = this.loginForm.get('userName').value;
    console.log('Storing username :' + userState.userName + ' in Store');
    this.store.dispatch(new StoreState(userState));
    this.router.navigate(['/welcome']);
  }

}
