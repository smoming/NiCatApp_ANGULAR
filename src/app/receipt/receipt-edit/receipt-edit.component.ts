import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { Receipt } from '../receipt';
import { Extension } from '../../extension';

@Component({
  selector: 'app-receipt-edit',
  templateUrl: './receipt-edit.component.html',
  styleUrls: ['./receipt-edit.component.css']
})
export class ReceiptEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Receipt>();
  @Output()
  deleteEvent = new EventEmitter<Receipt>();
  @Input()
  item: Receipt;

  constructor() {
  }

  ngOnInit() {
    // this.load();
  }

  ngOnChanges() {
    if (this.item) {
      this.item.TradeDate = Extension.toDate(this.item.TradeDate);
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
