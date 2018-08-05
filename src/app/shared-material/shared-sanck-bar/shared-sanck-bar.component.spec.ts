import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSanckBarComponent } from './shared-sanck-bar.component';

describe('SharedSanckBarComponent', () => {
  let component: SharedSanckBarComponent;
  let fixture: ComponentFixture<SharedSanckBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSanckBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSanckBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
