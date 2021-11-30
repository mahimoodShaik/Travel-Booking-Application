import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaGateComponent } from './india-gate.component';

describe('IndiaGateComponent', () => {
  let component: IndiaGateComponent;
  let fixture: ComponentFixture<IndiaGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
