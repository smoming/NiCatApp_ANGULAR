import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule,
    SharedMaterialModule
  ],
  declarations: [SupplierComponent, SupplierListComponent, SupplierEditComponent]
})
export class SupplierModule { }
