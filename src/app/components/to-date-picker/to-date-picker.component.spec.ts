import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDatePickerComponent } from './to-date-picker.component';

describe('ToDatePickerComponent', () => {
  let component: ToDatePickerComponent;
  let fixture: ComponentFixture<ToDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
