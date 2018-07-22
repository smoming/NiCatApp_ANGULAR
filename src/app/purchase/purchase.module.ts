import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchaseQueryComponent } from './purchase-query/purchase-query.component';
import { FormsModule } from '@angular/forms';
import { UnpurchasedOrderComponent } from './unpurchased-order/unpurchased-order.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PurchaseRoutingModule,
    SharedMaterialModule
  ],
  declarations: [PurchaseComponent, PurchaseListComponent, PurchaseEditComponent, PurchaseQueryComponent, UnpurchasedOrderComponent]
})
export class PurchaseModule { }
