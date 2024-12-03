import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationmanagmentComponent } from './reservationmanagment.component';

describe('ReservationmanagmentComponent', () => {
  let component: ReservationmanagmentComponent;
  let fixture: ComponentFixture<ReservationmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationmanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
