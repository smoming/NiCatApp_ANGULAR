import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipt } from '../receipt';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Receipt>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Receipt) {
    this.selectEvent.emit(item);
  }

}
