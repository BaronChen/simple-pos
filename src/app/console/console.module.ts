import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleContainerComponent } from './console-container/console-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromConsole from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemBlockComponent } from './components/item-list/item-block/item-block.component';
import { ItemsEffects } from './effects/items.effects';
import { BasketComponent } from './components/basket/basket.component';
import { OrderDialogComponent } from './components/item-list/item-block/order-dialog/order-dialog.component';
import { BasketItemComponent } from './components/basket/basket-item/basket-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('console', fromConsole.reducer),
    EffectsModule.forFeature([ItemsEffects])
  ],
  declarations: [
    ConsoleContainerComponent,
    ItemListComponent,
    ItemBlockComponent,
    BasketComponent,
    OrderDialogComponent,
    BasketItemComponent
  ],
  entryComponents: [OrderDialogComponent],
  exports: [ConsoleContainerComponent]
})
export class ConsoleModule { }

export const consoleRoutes = [
  { path: 'console', component: ConsoleContainerComponent }
];
