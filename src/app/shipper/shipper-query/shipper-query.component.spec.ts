import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperQueryComponent } from './shipper-query.component';

describe('ShipperQueryComponent', () => {
  let component: ShipperQueryComponent;
  let fixture: ComponentFixture<ShipperQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
