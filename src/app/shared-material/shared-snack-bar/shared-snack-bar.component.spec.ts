import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSnackBarComponent } from './shared-snack-bar.component';

describe('SharedSnackBarComponent', () => {
  let component: SharedSnackBarComponent;
  let fixture: ComponentFixture<SharedSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
