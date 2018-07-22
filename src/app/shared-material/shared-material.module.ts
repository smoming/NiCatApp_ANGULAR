import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatExpansionModule,
  MatSidenavModule, MatListModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatButtonModule, MatIconModule, MatExpansionModule,
    MatSidenavModule, MatListModule, MatToolbarModule]
})
export class SharedMaterialModule { }
