import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Commodity } from '../commodity';
import { MatTableDataSource, MatPaginator } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Commodity>();

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

  doSelect(item: Commodity) {
    this.selectEvent.emit(item);
  }

}
