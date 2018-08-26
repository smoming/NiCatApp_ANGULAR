import { Component, OnInit } from '@angular/core';

import { PurchaseQuery } from '../purchase-query';
import { Purchase } from '../purchase';
import { Extension } from '../../extension';
import { PurchaseService } from '../purchase.service';
import { Order } from '../../order/order';
import { OrderService } from '../../order/order.service';

import * as datefns from 'date-fns';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { SharedSnackBarComponent } from '../../shared-material/shared-snack-bar/shared-snack-bar.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private svc: PurchaseService, private svc_order: OrderService,
    private snackbar: MatSnackBar) {
  }

  data: Purchase[];
  unpurchased: Order[];
  selected: Purchase;
  editMode = false;
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
    this.editMode = true;
  }

  doCreate() {
    // const c = new Purchase();
    // c.TradeDate = Extension.toDateStr(new Date());
    // this.selected = c;
    // this.isCreate = true;
    this.svc_order.getUnPurchase().subscribe(res => {
      this.data = null;
      this.editMode = false;
      this.unpurchased = res.map(v => {
        v.TradeDate = Extension.toDate(v.TradeDate);
        return v;
      });
      // console.log(this.unPaid);
      if (this.unpurchased == null || (this.unpurchased != null && this.unpurchased.length <= 0)) {
        this.showMsg(BooleanMessage.CreateFail('查無未付款進貨下單'));
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
    this.unpurchased = null;
  }

  doUpdate(item: Purchase) {
    if (this.editMode) {
      this.svc.update(item).subscribe(res => {
        this.showMsg(BooleanMessage.CreateSuccess('修改成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    }
  }

  doDelete(item: Purchase) {
    this.svc.delete(item).subscribe(res => {
      this.showMsg(BooleanMessage.CreateSuccess('刪除成功'));
      this.saved();
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err));
      console.log(err);
    });
  }

  saved() {
    if (this.editMode) {
      this.reload();
    }
    this.sort();
    this.selected = null;
  }

  showMsg(bm: BooleanMessage) {
    this.snackbar.openFromComponent(SharedSnackBarComponent, { data: bm });
  }
  sort() {
    if (this.data) {
      this.data.sort((a, b) => {
        return a.TransNo > b.TransNo ? 1 : -1;
      });
    }
  }

  query(query: PurchaseQuery) {
    this.selected = null;
    this._query = Object.assign({}, query);
    this.editMode = true;
    this.reload();
  }

}
