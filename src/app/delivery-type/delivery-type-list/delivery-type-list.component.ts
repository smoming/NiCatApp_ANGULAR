import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { DeliveryType } from '../delivery-type';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-delivery-type-list',
  templateUrl: './delivery-type-list.component.html',
  styleUrls: ['./delivery-type-list.component.css']
})
export class DeliveryTypeListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<DeliveryType>();

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

  doSelect(item: DeliveryType) {
    this.selectEvent.emit(item);
  }

}
