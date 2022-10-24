import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesbackComponent } from './moviesback.component';

describe('MoviesbackComponent', () => {
  let component: MoviesbackComponent;
  let fixture: ComponentFixture<MoviesbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
