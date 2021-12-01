import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public data = {
    email : '',
    password : '',
    confirmPassword : ''

  }
  valid = {
    email: true,
    password: true,
  };

  validate(type: string): void {
    const emailPattern = /\S+@\S+\.\S+/;

   if (type === 'email') {
      this.valid.email = emailPattern.test(this.data.email);
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.data.password === this.data.confirmPassword) {
        this.valid.password = true;
      } else {
        this.valid.password = false;
      }
    }
  }

  onKey(event: any, type: string) {
   if (type === 'email') {
      this.data.email = event.target.value;
    } else if (type === 'password') {
      this.data.password = event.target.value;
    } else if (type === 'confirmPassword') {
      this.data.confirmPassword = event.target.value;
    }
    this.validate(type);
  }
}