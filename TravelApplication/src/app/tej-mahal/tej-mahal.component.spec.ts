import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejMahalComponent } from './tej-mahal.component';

describe('TejMahalComponent', () => {
  let component: TejMahalComponent;
  let fixture: ComponentFixture<TejMahalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejMahalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TejMahalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
