import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatCommonModule,
  MatCardModule,
  MatSelectModule,
  MatSidenavModule,
  MatGridListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCommonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCommonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule
  ],
})
export class MaterialModule { }
