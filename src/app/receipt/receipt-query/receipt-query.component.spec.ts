import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptQueryComponent } from './receipt-query.component';

describe('ReceiptQueryComponent', () => {
  let component: ReceiptQueryComponent;
  let fixture: ComponentFixture<ReceiptQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
