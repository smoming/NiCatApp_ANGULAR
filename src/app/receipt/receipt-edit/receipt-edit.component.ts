import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { Receipt } from '../receipt';
import { Extension } from '../../extension';
import { OrderService } from '../../order/order.service';
import { OrderQuery } from '../../order/order-query';
import { Order } from '../../order/order';

@Component({
  selector: 'app-receipt-edit',
  templateUrl: './receipt-edit.component.html',
  styleUrls: ['./receipt-edit.component.css']
})
export class ReceiptEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Receipt>();
  @Output()
  deleteEvent = new EventEmitter<Receipt>();
  @Input()
  item: Receipt;

  deleteable = false;

  constructor(private orserSvc: OrderService) {
  }

  ngOnInit() {
    // this.load();
  }

  ngOnChanges() {
    if (this.item) {
      this.item.TradeDate = Extension.toDate(this.item.TradeDate);
      this.orserSvc.look({
        StartDate: '',
        EndDate: '',
        CommodityID: '',
        ReceiptNo: this.item.TransNo
      }).subscribe(res => {
        const orders = (<Order[]>res);
        this.deleteable = (orders.filter(v =>
          Extension.isNotNullOrEmpty(v.PurchaseNo)).length <= 0);
      });
    }
  }

  update() {
    this.updateEvent.emit(this.item);
  }

  delete() {
    this.deleteEvent.emit(this.item);
  }

  cancel() {
    this.item = null;
  }

}
