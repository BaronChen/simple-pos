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
  MatDialogModule
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
    MatDialogModule
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
    MatDialogModule
  ],
})
export class MaterialModule { }
