import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsComponent } from './mains.component';

describe('MainComponent', () => {
  let component: MainsComponent;
  let fixture: ComponentFixture<MainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
