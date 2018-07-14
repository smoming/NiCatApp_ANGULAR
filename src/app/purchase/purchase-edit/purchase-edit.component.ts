import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Purchase } from '../purchase';
import { Extension } from '../../extension';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Purchase>();
  @Output()
  deleteEvent = new EventEmitter<Purchase>();
  @Input()
  item: Purchase;
  @Input()
  isCreate;

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
