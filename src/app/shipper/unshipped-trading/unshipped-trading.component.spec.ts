import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnshippedTradingComponent } from './unshipped-trading.component';

describe('UnshippedTradingComponent', () => {
  let component: UnshippedTradingComponent;
  let fixture: ComponentFixture<UnshippedTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnshippedTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnshippedTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
