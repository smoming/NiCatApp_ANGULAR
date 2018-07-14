import { Component, OnInit } from '@angular/core';

import { PurchaseQuery } from '../purchase-query';
import { Purchase } from '../purchase';
import { Extension } from '../../extension';
import { PurchaseService } from '../purchase.service';
import { Order } from '../../order/order';
import { OrderService } from '../../order/order.service';

import * as datefns from 'date-fns';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private svc: PurchaseService, private svc_order: OrderService) {
  }


  data: Purchase[];
  unpurchased: Order[];
  selected: Purchase;
  isCreate = false;
  saveMessage = '';
  _query: PurchaseQuery;

  ngOnInit() {
    // this.reload();
    const today = new Date();
    this._query = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today)
    };
  }

  reload() {
    this.unpurchased = null;
    this.svc.look(this._query).subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: Purchase) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    // const c = new Purchase();
    // c.TradeDate = Extension.toDateStr(new Date());
    // this.selected = c;
    // this.isCreate = true;
    this.svc_order.getUnPurchase().subscribe(res => {
      this.data = null;
      this.isCreate = true;
      this.unpurchased = res.map(v => {
        v.TradeDate = Extension.toDate(v.TradeDate);
        return v;
      });
      // console.log(this.unPaid);
    });
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
    this.unpurchased = null;
  }

  doUpdate(item: Purchase) {
    if (!this.isCreate) {
      this.svc.update(item).subscribe(res => {
        this.saveMessage = '修改成功';
        this.saved();
      }, err => console.log(err));
    }
  }

  doDelete(item: Purchase) {
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

  query(query: PurchaseQuery) {
    this._query = Object.assign({}, query);
    this.isCreate = false;
    this.reload();
  }

}
