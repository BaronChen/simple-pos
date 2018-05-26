import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromReceipt from './reducers/receipt.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReceiptEffects } from './effects/receipt.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('receipt', fromReceipt.reducer),
    EffectsModule.forFeature([ReceiptEffects])
  ],
  declarations: []
})
export class ReceiptModule { }
