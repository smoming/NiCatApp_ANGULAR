import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingQueryComponent } from './trading-query.component';

describe('TradingQueryComponent', () => {
  let component: TradingQueryComponent;
  let fixture: ComponentFixture<TradingQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
