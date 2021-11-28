import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToVisitComponent } from './places-to-visit.component';

describe('PlacesToVisitComponent', () => {
  let component: PlacesToVisitComponent;
  let fixture: ComponentFixture<PlacesToVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesToVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
