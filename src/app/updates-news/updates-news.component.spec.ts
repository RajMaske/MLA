import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesNewsComponent } from './updates-news.component';

describe('UpdatesNewsComponent', () => {
  let component: UpdatesNewsComponent;
  let fixture: ComponentFixture<UpdatesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
