import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreservationsmanagmentComponent } from './myreservationsmanagment.component';

describe('MyreservationsmanagmentComponent', () => {
  let component: MyreservationsmanagmentComponent;
  let fixture: ComponentFixture<MyreservationsmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyreservationsmanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreservationsmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
