import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Commodity } from '../../commodity/commodity';
import { CommodityService } from '../../commodity/commodity.service';
import { OrderQuery } from '../order-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';
import { Receipt } from '../../receipt/receipt';

@Component({
  selector: 'app-order-query',
  templateUrl: './order-query.component.html',
  styleUrls: ['./order-query.component.css']
})
export class OrderQueryComponent implements OnInit {

  @Output()
  queryEvent = new EventEmitter<OrderQuery>();

  item: OrderQuery;
  commoditylist: Commodity[];

  constructor(private commodity_svc: CommodityService) {
    const today = new Date();
    this.item = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today),
      CommodityID: '',
      ReceiptNo: ''
    };
    this.commodity_svc.look().subscribe(res => {
      res.unshift(new Commodity());
      this.commoditylist = res;
    });
  }

  ngOnInit() {
  }

  doQuery(query: NgForm) {
    this.queryEvent.emit(query.value);
  }
}
