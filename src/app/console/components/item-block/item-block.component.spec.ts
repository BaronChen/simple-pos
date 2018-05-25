import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlockComponent } from './item-block.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConsoleService } from '../../services/console.service';

describe('ItemBlockComponent', () => {
  let component: ItemBlockComponent;
  let fixture: ComponentFixture<ItemBlockComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ItemBlockComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBlockComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 'test_item_id_1',
      name: 'test_item_1',
      imageUrl: 'test_item_url_1',
      price: 10
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
