import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterproducerComponent } from './registerproducer.component';

describe('RegisterproducerComponent', () => {
  let component: RegisterproducerComponent;
  let fixture: ComponentFixture<RegisterproducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterproducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterproducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
