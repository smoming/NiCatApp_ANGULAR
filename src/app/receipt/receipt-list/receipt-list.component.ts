import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Receipt } from '../receipt';
import { MatTableDataSource, MatPaginator } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Receipt>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.matTableDS.paginator = this.paginator;
    if (this.datalist) {
      this.matTableDS.data = this.datalist;
      this.totalCount = this.datalist.length;
    }
  }

  doSelect(item: Receipt) {
    this.selectEvent.emit(item);
  }

}
