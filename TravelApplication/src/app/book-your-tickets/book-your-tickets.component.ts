import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-your-tickets',
  templateUrl: './book-your-tickets.component.html',
  styleUrls: ['./book-your-tickets.component.css']
})
export class BookYourTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public data = {
    tel:'',
    text : '',
    email : '',

  }
  valid = {
    tel: true,
    text: true,
    email: true,
  };

  validate(type: string): void {
    const usernamePattern = /[A-Z\sa-z]/;
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[com]$/;
    const phonePattern = /^\d{10}$/;

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
      }
    }

  onKey(event: any, type: string) {
    if (type === 'text') {
      this.data.text = event.target.value;  
    } else if (type === 'tel') {
      this.data.tel = event.target.value;
    } else if (type === 'email') {
      this.data.email = event.target.value;
    }
    this.validate(type);
  }
  
}
