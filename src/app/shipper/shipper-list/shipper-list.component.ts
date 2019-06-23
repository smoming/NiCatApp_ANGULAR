import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Shipper } from '../shipper';
import { MatTableDataSource, MatPaginator } from '../../../../node_modules/@angular/material';
import { DeliveryType } from '../../delivery-type/delivery-type';
import { DeliveryTypeService } from '../../delivery-type/delivery-type.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit, OnChanges {
  @ViewChild('paginator', { static: false }) paginator: MatPaginator;
  totalCount;
  matTableDS = new MatTableDataSource<any>();
  deliverylist: DeliveryType[];

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Shipper>();

  constructor(private dsvc: DeliveryTypeService) { }

  ngOnInit() {
    this.dsvc.look().subscribe(v => {
      this.deliverylist = v;
    });
  }

  ngOnChanges() {
    this.matTableDS.paginator = this.paginator;
    if (this.datalist) {
      this.matTableDS.data = this.datalist;
      this.totalCount = this.datalist.length;
    }
  }

  doSelect(item: Shipper) {
    this.selectEvent.emit(item);
  }

  findname(id: string) {
    if (this.deliverylist) {
      const delivery = this.deliverylist.find(v => {
        return v.ID === id;
      });

      if (delivery !== undefined && delivery !== null) {
        return delivery.Name;
      } else {
        return id;
      }
    }

    return id;
  }
}
