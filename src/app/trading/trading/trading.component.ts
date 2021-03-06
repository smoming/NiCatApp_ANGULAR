import { Component, OnInit } from '@angular/core';

import { TradingService } from '../trading.service';
import { Trading } from '../trading';
import { TradingQuery } from '../trading-query';
import { Extension } from '../../extension';

import * as datefns from 'date-fns';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSnackBarComponent } from '../../shared-material/shared-snack-bar/shared-snack-bar.component';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {

  constructor(private svc: TradingService,
    private snackbar: MatSnackBar) {
  }

  data: Trading[];
  selected: Trading;
  isCreate = false;
  _query: TradingQuery;

  ngOnInit() {
    // this.reload();
    const today = new Date();
    this._query = {
      StartDate: Extension.toDateStr(datefns.addDays(today, -7)),
      EndDate: Extension.toDateStr(today),
      Buyer: '',
      CommodityID: ''
    };
  }

  reload() {
    this.svc.look(this._query).subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: Trading) {
    this.selected = Object.assign({}, item);
    // console.log(this.selected.TradeDate);
    this.isCreate = false;
  }

  doCreate() {
    const c = new Trading();
    c.TradeDate = Extension.toDateStr(new Date());
    this.selected = c;
    this.isCreate = true;
  }

  doUpdate(item: Trading) {
    if (this.isCreate) {
      this.svc.add(item).subscribe(res => {
        // this.data.push(item);
        this.showMsg(BooleanMessage.CreateSuccess('新增成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    } else {
      this.svc.update(item).subscribe(res => {
        // this.data = this.data.map((v) => {
        //   if (v.TransNo === item.TransNo) {
        //     return Object.assign({}, v, item);
        //   }
        //   return v;
        // });
        this.showMsg(BooleanMessage.CreateSuccess('修改成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    }
  }

  doDelete(item: Trading) {
    this.svc.delete(item).subscribe(res => {
      // this.data = this.data.filter((v) => {
      //   return v.TransNo !== item.TransNo;
      // });
      this.showMsg(BooleanMessage.CreateSuccess('刪除成功'));
      this.saved();
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err));
      console.log(err);
    });
  }

  saved() {
    this.selected = null;
    this.isCreate = false;

    this.reload();
    this.sort();
  }

  showMsg(bm: BooleanMessage) {
    this.snackbar.openFromComponent(SharedSnackBarComponent, { data: bm });
  }
  sort() {
    this.data.sort((a, b) => {
      return a.TransNo > b.TransNo ? 1 : -1;
    });
  }

  query(query: TradingQuery) {
    this.selected = null;
    this._query = Object.assign({}, query);
    this.reload();
  }
}
