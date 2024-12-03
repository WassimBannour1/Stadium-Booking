import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmymatchesComponent } from './checkmymatches.component';

describe('CheckmymatchesComponent', () => {
  let component: CheckmymatchesComponent;
  let fixture: ComponentFixture<CheckmymatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckmymatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckmymatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
