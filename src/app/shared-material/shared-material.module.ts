import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatExpansionModule,
  MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatGridListModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedSanckBarComponent } from './shared-sanck-bar/shared-sanck-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule, MatIconModule, MatSnackBarModule
  ],
  declarations: [SharedSanckBarComponent],
  exports: [MatButtonModule, MatIconModule, MatExpansionModule,
    MatSidenavModule, MatListModule, MatToolbarModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatMomentDateModule, MatDatepickerModule,
    MatTableModule, MatPaginatorModule, MatSnackBarModule]
})
export class SharedMaterialModule { }
