import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyServicesComponent } from './constituency-services.component';

describe('ConstituencyServicesComponent', () => {
  let component: ConstituencyServicesComponent;
  let fixture: ComponentFixture<ConstituencyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstituencyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstituencyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
