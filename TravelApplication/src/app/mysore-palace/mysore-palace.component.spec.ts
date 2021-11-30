import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysorePalaceComponent } from './mysore-palace.component';

describe('MysorePalaceComponent', () => {
  let component: MysorePalaceComponent;
  let fixture: ComponentFixture<MysorePalaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysorePalaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysorePalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
