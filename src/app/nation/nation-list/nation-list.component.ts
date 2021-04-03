import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { Nation } from '../nation';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-nation-list',
  templateUrl: './nation-list.component.html',
  styleUrls: ['./nation-list.component.css']
})
export class NationListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Nation>();

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

  doSelect(item: Nation) {
    this.selectEvent.emit(item);
  }

}
