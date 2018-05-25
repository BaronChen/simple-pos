import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../share/share.module';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ConsoleModule } from '../console/console.module';
import { consoleRoutes } from '../console/console.module';


const appRoutes = [
   ...consoleRoutes,
  {
    path: '',
    redirectTo: '/console',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/console' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConsoleModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}