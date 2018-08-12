import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { Commodity } from '../../commodity/commodity';
import { CommodityService } from '../../commodity/commodity.service';
import { Trading } from '../trading';
import { Extension } from '../../extension';

@Component({
  selector: 'app-trading-edit',
  templateUrl: './trading-edit.component.html',
  styleUrls: ['./trading-edit.component.css']
})
export class TradingEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Trading>();
  @Output()
  deleteEvent = new EventEmitter<Trading>();
  @Input()
  item: Trading;
  @Input()
  isCreate;

  editable = false;
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
    this.editable = false;
    if (this.item) {
      this.item.TradeDate = Extension.toDate(this.item.TradeDate);
      this.editable = Extension.isNullOrEmpty(this.item.ShipperNo);
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
