import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleContainerComponent } from './console-container/console-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromConsole from './reducers/console.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConsoleEffects } from './effects/console.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('console', fromConsole.reducer),
    EffectsModule.forFeature([ConsoleEffects])
  ],
  declarations: [ConsoleContainerComponent],
  exports: [ConsoleContainerComponent]
})
export class ConsoleModule { }

export const consoleRoutes = [
  { path: 'console', component: ConsoleContainerComponent }
];
