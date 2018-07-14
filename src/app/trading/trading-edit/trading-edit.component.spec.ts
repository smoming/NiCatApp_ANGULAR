import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingEditComponent } from './trading-edit.component';

describe('TradingEditComponent', () => {
  let component: TradingEditComponent;
  let fixture: ComponentFixture<TradingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
