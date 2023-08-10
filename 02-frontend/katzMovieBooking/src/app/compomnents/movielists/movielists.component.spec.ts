import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistsComponent } from './movielists.component';

describe('MovielistsComponent', () => {
  let component: MovielistsComponent;
  let fixture: ComponentFixture<MovielistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovielistsComponent]
    });
    fixture = TestBed.createComponent(MovielistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
