import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleContainerComponent } from './console-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ConsoleContainerComponent', () => {
  let component: ConsoleContainerComponent;
  let fixture: ComponentFixture<ConsoleContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ConsoleContainerComponent ]
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
