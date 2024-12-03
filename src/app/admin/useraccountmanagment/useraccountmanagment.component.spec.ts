import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountmanagmentComponent } from './useraccountmanagment.component';

describe('UseraccountmanagmentComponent', () => {
  let component: UseraccountmanagmentComponent;
  let fixture: ComponentFixture<UseraccountmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseraccountmanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraccountmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
