import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseQueryComponent } from './purchase-query.component';

describe('PurchaseQueryComponent', () => {
  let component: PurchaseQueryComponent;
  let fixture: ComponentFixture<PurchaseQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
