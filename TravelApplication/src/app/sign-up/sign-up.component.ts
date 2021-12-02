import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public data = {
    tel:'',
    text : '',
    email : '',
    password : '',
    confirmPassword : ''

  }
  valid = {
    tel: true,
    text: true,
    email: true,
    password: true,
  };

  validate(type: string): void {
    const usernamePattern = /[A-Z\sa-z]/;
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[com]$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (type === 'text') {
      if (this.data.text.length < 3) {
        this.valid.text = false;
      } else {
        this.valid.text = usernamePattern.test(this.data.text);
      }
    } else if (type === 'tel') {
      this.valid.tel = phonePattern.test(this.data.tel);
    } else if (type === 'email') {
      this.valid.email = emailPattern.test(this.data.email);
    }else if (type === 'password') {
      this.valid.password = passwordPattern.test(this.data.password);
    } else if (type === ('confirmPassword' || 'password')) {
      if (this.data.password === this.data.confirmPassword) {
        this.valid.password = true;
      } else {
        this.valid.password = false;
      }
    }
  }

  onKey(event: any, type: string) {
    if (type === 'text') {
      this.data.text = event.target.value;  
    } else if (type === 'tel') {
      this.data.tel = event.target.value;
    } else if (type === 'email') {
      this.data.email = event.target.value;
    } else if (type === 'password') {
      this.data.password = event.target.value;
    } else if (type === 'confirmPassword') {
      this.data.confirmPassword = event.target.value;
    }
    this.validate(type);
  }
  
}
