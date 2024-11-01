import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagemenComponent } from './event-managemen.component';

describe('EventManagemenComponent', () => {
  let component: EventManagemenComponent;
  let fixture: ComponentFixture<EventManagemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagemenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
