import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Trading } from '../trading';
import { MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';
import { CommodityService } from '../../commodity/commodity.service';
import { Commodity } from '../../commodity/commodity';

@Component({
  selector: 'app-trading-list',
  templateUrl: './trading-list.component.html',
  styleUrls: ['./trading-list.component.css']
})
export class TradingListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();
  commodityList: Commodity[];

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Trading>();

  constructor(private csvc: CommodityService) { }

  ngOnInit() {
    this.csvc.look().subscribe(res => {
      this.commodityList = res;
    });
  }

  ngOnChanges() {
    this.matTableDS.paginator = this.paginator;
    if (this.datalist) {
      this.matTableDS.data = this.datalist;
      this.totalCount = this.datalist.length;
    }
  }

  doSelect(item: Trading) {
    this.selectEvent.emit(item);
  }

  findname(id: string) {
    const commodity = this.commodityList.find(v => {
      return v.ID === id;
    });

    if (commodity !== undefined && commodity !== null) {
      return commodity.Name;
    } else {
      return id;
    }
  }

}
