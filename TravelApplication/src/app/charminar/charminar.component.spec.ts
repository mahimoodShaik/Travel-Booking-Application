import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharminarComponent } from './charminar.component';

describe('CharminarComponent', () => {
  let component: CharminarComponent;
  let fixture: ComponentFixture<CharminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
