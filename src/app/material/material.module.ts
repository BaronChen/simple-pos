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
  MatDialogModule,
  MatListModule,
  MatDividerModule,
  MatChipsModule,
  MatTableModule
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
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule
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
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatTableModule
  ],
})
export class MaterialModule { }
