import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleContainerComponent } from './console-container/console-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromConsole from './reducers/console.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConsoleEffects } from './effects/console.effects';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
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
