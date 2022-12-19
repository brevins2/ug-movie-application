import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouretsComponent } from './favourets.component';

describe('FavouretsComponent', () => {
  let component: FavouretsComponent;
  let fixture: ComponentFixture<FavouretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouretsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
