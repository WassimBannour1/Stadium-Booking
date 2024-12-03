import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookamatchComponent } from './bookamatch.component';

describe('BookamatchComponent', () => {
  let component: BookamatchComponent;
  let fixture: ComponentFixture<BookamatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookamatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookamatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
