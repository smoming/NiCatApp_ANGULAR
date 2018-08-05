import { Component, OnInit } from '@angular/core';

import { Extension } from '../../extension';
import { CashFlowService } from '../cash-flow.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSanckBarComponent } from '../../shared-material/shared-sanck-bar/shared-sanck-bar.component';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  executeDate: string;

  constructor(private svc: CashFlowService,
    private sanckbar: MatSnackBar) {
    this.executeDate = Extension.toDateStr(new Date());
  }

  ngOnInit() {
  }

  doAccount() {
    this.svc.account(this.executeDate).subscribe(res => {
      this.showMsg(BooleanMessage.CreateSuccess('結帳成功'));
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err.error.Message));
      console.log(err);
    });
  }

  doUnAccount() {
    this.svc.unaccount(this.executeDate).subscribe(res => {
      this.showMsg(BooleanMessage.CreateSuccess('回帳成功'));
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err.error.Message));
      console.log(err);
    });
  }

  showMsg(bm: BooleanMessage) {
    this.sanckbar.openFromComponent(SharedSanckBarComponent, { data: bm });
  }
}
