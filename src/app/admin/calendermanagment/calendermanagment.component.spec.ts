import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendermanagmentComponent } from './calendermanagment.component';

describe('CalendermanagmentComponent', () => {
  let component: CalendermanagmentComponent;
  let fixture: ComponentFixture<CalendermanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendermanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
