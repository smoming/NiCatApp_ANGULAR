import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTypeEditComponent } from './delivery-type-edit.component';

describe('DeliveryTypeEditComponent', () => {
  let component: DeliveryTypeEditComponent;
  let fixture: ComponentFixture<DeliveryTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
