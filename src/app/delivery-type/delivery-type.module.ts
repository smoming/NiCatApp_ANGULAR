import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeliveryTypeRoutingModule } from './delivery-type-routing.module';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';
import { DeliveryTypeListComponent } from './delivery-type-list/delivery-type-list.component';
import { DeliveryTypeEditComponent } from './delivery-type-edit/delivery-type-edit.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DeliveryTypeRoutingModule,
    SharedMaterialModule
  ],
  exports: [DeliveryTypeComponent],
  declarations: [DeliveryTypeComponent, DeliveryTypeListComponent, DeliveryTypeEditComponent]
})
export class DeliveryTypeModule { }
