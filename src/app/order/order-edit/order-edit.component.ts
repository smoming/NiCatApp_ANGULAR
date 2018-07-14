import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { Order } from '../order';
import { CommodityService } from '../../commodity/commodity.service';
import { Commodity } from '../../commodity/commodity';
import { Extension } from '../../extension';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Order>();
  @Output()
  deleteEvent = new EventEmitter<Order>();
  @Input()
  item: Order;
  @Input()
  isCreate;

  commoditylist: Commodity[];

  constructor(private commodity_svc: CommodityService) {
    // this.commoditylist = this.commodity_svc.look();
    this.commodity_svc.look().subscribe(res => {
      this.commoditylist = res;
    });
  }

  ngOnInit() {
    // this.load();
  }

  ngOnChanges() {
    if (this.item) {
      this.item.TradeDate = Extension.toDate(this.item.TradeDate);
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
