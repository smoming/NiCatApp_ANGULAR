import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Purchase>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Purchase) {
    this.selectEvent.emit(item);
  }

}
