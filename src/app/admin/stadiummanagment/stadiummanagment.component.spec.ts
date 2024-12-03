import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiummanagmentComponent } from './stadiummanagment.component';

describe('StadiummanagmentComponent', () => {
  let component: StadiummanagmentComponent;
  let fixture: ComponentFixture<StadiummanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StadiummanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadiummanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
