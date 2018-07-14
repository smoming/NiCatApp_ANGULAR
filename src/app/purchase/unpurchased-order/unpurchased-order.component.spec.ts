import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpurchasedOrderComponent } from './unpurchased-order.component';

describe('UnpurchasedOrderComponent', () => {
  let component: UnpurchasedOrderComponent;
  let fixture: ComponentFixture<UnpurchasedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpurchasedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpurchasedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
