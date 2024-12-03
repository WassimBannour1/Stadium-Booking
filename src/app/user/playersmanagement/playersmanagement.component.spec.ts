import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersmanagementComponent } from './playersmanagement.component';

describe('PlayersmanagementComponent', () => {
  let component: PlayersmanagementComponent;
  let fixture: ComponentFixture<PlayersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersmanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
