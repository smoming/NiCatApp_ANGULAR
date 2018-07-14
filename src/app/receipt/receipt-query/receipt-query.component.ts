import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ReceiptQuery } from '../receipt-query';
import { Extension } from '../../extension';
import { NgForm } from '@angular/forms';

import * as datefns from 'date-fns';

@Component({
  selector: 'app-receipt-query',
  templateUrl: './receipt-query.component.html',
  styleUrls: ['./receipt-query.component.css']
})
export class ReceiptQueryComponent implements OnInit {

  @Output()
  queryEvent = new EventEmitter<ReceiptQuery>();

  item: ReceiptQuery;

  constructor() {
    const today = new Date();
    this.item = { StartDate: Extension.toDateStr(datefns.addDays(today, -7)), EndDate: Extension.toDateStr(today) };
  }

  ngOnInit() {
  }

  doQuery(query: NgForm) {
    this.queryEvent.emit(query.value);
  }

}
