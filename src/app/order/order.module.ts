import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderQueryComponent } from './order-query/order-query.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule,
    SharedMaterialModule
  ],
  declarations: [OrderComponent, OrderListComponent, OrderEditComponent, OrderQueryComponent]
})
export class OrderModule { }
