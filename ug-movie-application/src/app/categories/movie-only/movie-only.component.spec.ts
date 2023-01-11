import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOnlyComponent } from './movie-only.component';

describe('MovieOnlyComponent', () => {
  let component: MovieOnlyComponent;
  let fixture: ComponentFixture<MovieOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
