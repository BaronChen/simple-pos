import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemComponent } from './basket-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BasketItemComponent', () => {
  let component: BasketItemComponent;
  let fixture: ComponentFixture<BasketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
