import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TradingQuery } from '../trading-query';
import { Commodity } from '../../commodity/commodity';
import { CommodityService } from '../../commodity/commodity.service';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';

@Component({
  selector: 'app-trading-query',
  templateUrl: './trading-query.component.html',
  styleUrls: ['./trading-query.component.css']
})
export class TradingQueryComponent implements OnInit {

  @Output()
  queryEvent = new EventEmitter<TradingQuery>();

  item: TradingQuery;
  commoditylist: Commodity[];

  constructor(private commodity_svc: CommodityService) {
    const today = new Date();
    this.item = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today),
      Buyer: '',
      CommodityID: ''
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
