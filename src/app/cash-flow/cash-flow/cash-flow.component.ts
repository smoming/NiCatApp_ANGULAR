import { Component, OnInit } from '@angular/core';

import { Extension } from '../../extension';
import { CashFlowService } from '../cash-flow.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  saveMessage = '';
  executeDate: string;

  constructor(private svc: CashFlowService) {
    this.executeDate = Extension.toDateStr(new Date());
  }

  ngOnInit() {
  }

  doAccount() {
    this.svc.account(this.executeDate).subscribe(res => {
      this.saveMessage = '結帳成功';
    }, err => {
      console.log(err);
      this.saveMessage = err.error.Message;
    });
    this.save();
  }

  doUnAccount() {
    this.svc.unaccount(this.executeDate).subscribe(res => {
      this.saveMessage = '回帳帳成功';
    }, err => {
      console.log(err);
      this.saveMessage = err.error.Message;
    });
    this.save();
  }


  save() {
    setTimeout(() => {
      this.saveMessage = '';
    }, 3000);
  }
}
