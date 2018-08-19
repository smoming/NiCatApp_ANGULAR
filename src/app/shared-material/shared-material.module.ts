import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatExpansionModule,
  MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatGridListModule,
  MatCheckboxModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedSnackBarComponent } from './shared-snack-bar/shared-snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule, MatIconModule, MatSnackBarModule
  ],
  declarations: [SharedSnackBarComponent],
  exports: [MatButtonModule, MatIconModule, MatExpansionModule,
    MatSidenavModule, MatListModule, MatToolbarModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatMomentDateModule, MatDatepickerModule,
    MatTableModule, MatPaginatorModule, MatSnackBarModule,
    MatCheckboxModule]
})
export class SharedMaterialModule { }
