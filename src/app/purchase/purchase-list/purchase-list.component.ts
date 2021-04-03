import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';

import { Purchase } from '../purchase';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Purchase>();

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

  doSelect(item: Purchase) {
    this.selectEvent.emit(item);
  }

}
