import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Order } from '../order';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommodityService } from '../../commodity/commodity.service';
import { Commodity } from '../../commodity/commodity';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();
  commodityList: Commodity[];

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Order>();

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

  doSelect(item: Order) {
    this.selectEvent.emit(item);
  }

  findname(id: string) {
    if (this.commodityList) {
      const commodity = this.commodityList.find(v => {
        return v.ID === id;
      });

      if (commodity !== undefined && commodity !== null) {
        return commodity.Name;
      } else {
        return id;
      }
    }

    return id;
  }
}
