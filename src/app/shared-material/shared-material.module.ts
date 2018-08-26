import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatExpansionModule,
  MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatGridListModule,
  MatCheckboxModule,
  MatProgressBarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedSnackBarComponent } from './shared-snack-bar/shared-snack-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { SelectDataInfoComponent } from './select-data-info/select-data-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule, MatIconModule, MatSnackBarModule, MatProgressBarModule
  ],
  declarations: [SharedSnackBarComponent, LoaderComponent, SelectDataInfoComponent],
  exports: [MatButtonModule, MatIconModule, MatExpansionModule,
    MatSidenavModule, MatListModule, MatToolbarModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatMomentDateModule, MatDatepickerModule,
    MatTableModule, MatPaginatorModule, MatSnackBarModule,
    MatCheckboxModule, LoaderComponent, SelectDataInfoComponent]
})
export class SharedMaterialModule { }
