import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Trading } from '../../trading/trading';
import { Commodity } from '../../commodity/commodity';
import { CommodityService } from '../../commodity/commodity.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unshipped-trading',
  templateUrl: './unshipped-trading.component.html',
  styleUrls: ['./unshipped-trading.component.css']
})
export class UnshippedTradingComponent implements OnInit, OnChanges {

  @Input()
  datalist: Trading[];

  @Output()
  payEvent = new EventEmitter<string[]>();
  @Output()
  cancelpayEvent = new EventEmitter<void>();

  commodityList: Commodity[];
  matTableDS = new MatTableDataSource<any>();
  paylist: string[] = [];

  constructor(private csvc: CommodityService) { }

  ngOnInit() {
    this.csvc.look().subscribe(s => {
      this.commodityList = s;
    });
  }

  ngOnChanges() {
    // console.log(this.datalist);
    if (this.datalist) {
      this.matTableDS.data = this.datalist;
    }
  }

  doPay() {
    this.payEvent.emit(this.paylist);
    this.paylist = [];
  }

  cancel() {
    this.cancelpayEvent.emit();
  }

  // docheck(item: Event) {
  //   const check = (<HTMLInputElement>item.target);
  //   const transno = check.getAttribute('data-transno');
  //   // console.log(check.checked);
  //   // console.log(check.getAttribute('data-transno'));
  //   if (check.checked) {
  //     this.paylist.push(transno);
  //   } else {
  //     this.paylist = this.paylist.filter(v => {
  //       return v !== transno;
  //     });
  //   }
  // }

  docheck(event: MatCheckboxChange, row: Trading) {
    // console.log(event);
    // console.log(row);
    if (event.checked) {
      this.paylist.push(row.TransNo);
    } else {
      this.paylist = this.paylist.filter(v => {
        return v !== row.TransNo;
      });
    }
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
