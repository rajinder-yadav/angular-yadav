import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCounterComponent } from './books-counter.component';

describe('BooksCounterComponent', () => {
  let component: BooksCounterComponent;
  let fixture: ComponentFixture<BooksCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
