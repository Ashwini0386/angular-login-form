import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserState} from "../store/user-state.reducer";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userState: Observable<UserState>;
  userName: String;
  constructor(private store: Store<{userState: UserState}>) {
    this.userState = store.pipe(select('userState'));
  }

  ngOnInit(): void {
    this.userState.subscribe(value => this.userName = value.userName);
  }

}
