import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component';
import { ReceiptQueryComponent } from './receipt-query/receipt-query.component';
import { FormsModule } from '@angular/forms';
import { UnpaidOrderComponent } from './unpaid-order/unpaid-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReceiptRoutingModule
  ],
  declarations: [ReceiptComponent, ReceiptListComponent, ReceiptEditComponent, ReceiptQueryComponent, UnpaidOrderComponent]
})
export class ReceiptModule { }
