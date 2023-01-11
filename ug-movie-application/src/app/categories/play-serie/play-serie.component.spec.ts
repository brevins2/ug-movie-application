import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySerieComponent } from './play-serie.component';

describe('PlaySerieComponent', () => {
  let component: PlaySerieComponent;
  let fixture: ComponentFixture<PlaySerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaySerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaySerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
