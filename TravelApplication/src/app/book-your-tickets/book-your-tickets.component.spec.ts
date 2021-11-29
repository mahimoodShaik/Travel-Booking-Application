import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourTicketsComponent } from './book-your-tickets.component';

describe('BookYourTicketsComponent', () => {
  let component: BookYourTicketsComponent;
  let fixture: ComponentFixture<BookYourTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookYourTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYourTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
