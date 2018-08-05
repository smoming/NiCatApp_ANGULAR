import { Component, OnInit } from '@angular/core';

import { ReceiptService } from '../receipt.service';
import { Receipt } from '../receipt';
import { ReceiptQuery } from '../receipt-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';
import { Order } from '../../order/order';
import { OrderService } from '../../order/order.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSanckBarComponent } from '../../shared-material/shared-sanck-bar/shared-sanck-bar.component';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private svc: ReceiptService, private svc_order: OrderService,
    private snackbar: MatSnackBar) {
  }

  data: Receipt[];
  unPaid: Order[];
  selected: Receipt;
  isCreate = false;
  _query: ReceiptQuery;

  ngOnInit() {
    const today = new Date();
    this._query = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today)
    };
  }

  reload() {
    this.unPaid = null;
    this.svc.look(this._query).subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: Receipt) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    // const c = new Receipt();
    // c.TradeDate = Extension.toDateStr(new Date());
    // this.selected = c;
    // this.isCreate = true;
    this.svc_order.getUnPaid().subscribe(res => {
      this.data = null;
      this.isCreate = true;
      this.unPaid = res.map(v => {
        v.TradeDate = Extension.toDate(v.TradeDate);
        return v;
      });
      console.log(this.unPaid);
      if (this.unPaid == null || (this.unPaid != null && this.unPaid.length <= 0)) {
        this.showMsg(BooleanMessage.CreateFail('查無未付款下單'));
      }
    });
  }

  doPay(transNos: string[]) {
    if (transNos.length > 0) {
      this.svc.add(transNos).subscribe(res => {
        // this.data.push(item);
        this.showMsg(BooleanMessage.CreateSuccess('新增成功'));
        this.doCancelPay();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    } else {
      this.showMsg(BooleanMessage.CreateFail('請選擇欲付款之下單交易'));
    }
    this.saved();
  }

  doCancelPay() {
    this.unPaid = null;
  }

  doUpdate(item: Receipt) {
    if (!this.isCreate) {
      this.svc.update(item).subscribe(res => {
        this.showMsg(BooleanMessage.CreateSuccess('修改成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    }
  }

  doDelete(item: Receipt) {
    this.svc.delete(item).subscribe(res => {
      this.showMsg(BooleanMessage.CreateSuccess('刪除成功'));
      this.saved();
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err));
      console.log(err);
    });
  }

  saved() {
    if (!this.isCreate) {
      this.reload();
    }
    this.sort();
    this.selected = null;
    this.isCreate = false;
  }

  showMsg(bm: BooleanMessage) {
    this.snackbar.openFromComponent(SharedSanckBarComponent, { data: bm });
  }
  sort() {
    if (this.data) {
      this.data.sort((a, b) => {
        return a.TransNo > b.TransNo ? 1 : -1;
      });
    }
  }

  query(query: ReceiptQuery) {
    this.selected = null;
    this._query = Object.assign({}, query);
    this.isCreate = false;
    this.reload();
  }

}
