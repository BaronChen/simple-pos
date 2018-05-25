import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleContainerComponent } from './console-container.component';
import { Store, StoreModule } from '@ngrx/store';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ConsoleContainerComponent', () => {
  let component: ConsoleContainerComponent;
  let fixture: ComponentFixture<ConsoleContainerComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ConsoleContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
