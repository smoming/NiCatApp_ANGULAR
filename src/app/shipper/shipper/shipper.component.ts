import { Component, OnInit } from '@angular/core';

import { Shipper } from '../shipper';
import { Trading } from '../../trading/trading';
import { ShipperService } from '../shipper.service';
import { TradingService } from '../../trading/trading.service';
import { ShipperQuery } from '../shipper-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {

  constructor(private svc: ShipperService, private svc_trading: TradingService) {
  }

  data: Shipper[];
  unShipped: Trading[];
  selected: Shipper;
  isCreate = false;
  saveMessage = '';
  _query: ShipperQuery;
  add_buyer = '';

  ngOnInit() {
    const today = new Date();
    this._query = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today),
      Buyer: ''
    };
  }

  reload() {
    this.unShipped = null;
    this.svc.look(this._query).subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: Shipper) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    // const c = new Receipt();
    // c.TradeDate = Extension.toDateStr(new Date());
    // this.selected = c;
    // this.isCreate = true;
    if (this.add_buyer !== undefined && this.add_buyer !== '') {
      this.svc_trading.GetUnShipped(this.add_buyer).subscribe(res => {
        this.data = null;
        this.isCreate = true;
        this.unShipped = res.map(v => {
          v.TradeDate = Extension.toDate(v.TradeDate);
          return v;
        });
        // console.log(this.unPaid);
      });
    } else {
      this.saveMessage = '請輸入欲新增之買家';
      setTimeout(() => {
        this.saveMessage = '';
      }, 3000);
    }
  }

  doPay(transNos: string[]) {
    if (transNos.length > 0) {
      this.svc.add(transNos).subscribe(res => {
        // this.data.push(item);
        this.saveMessage = '新增成功';
        this.doCancelPay();
      }, err => console.log(err));
    } else {
      this.saveMessage = '請選擇欲付款之下單交易';
    }
    this.saved();
  }

  doCancelPay() {
    this.unShipped = null;
  }

  doUpdate(item: Shipper) {
    if (!this.isCreate) {
      this.svc.update(item).subscribe(res => {
        this.saveMessage = '修改成功';
        this.saved();
      }, err => console.log(err));
    }
  }

  doDelete(item: Shipper) {
    this.svc.delete(item).subscribe(res => {
      this.saveMessage = '刪除成功';
      this.saved();
    }, err => console.log(err));
  }

  saved() {
    if (!this.isCreate) {
      this.reload();
    }
    this.sort();
    setTimeout(() => {
      this.saveMessage = '';
    }, 3000);
    this.selected = null;
    this.isCreate = false;
  }

  sort() {
    if (this.data) {
      this.data.sort((a, b) => {
        return a.TransNo > b.TransNo ? 1 : -1;
      });
    }
  }

  query(query: ShipperQuery) {
    this._query = Object.assign({}, query);
    this.isCreate = false;
    this.reload();
  }

}
