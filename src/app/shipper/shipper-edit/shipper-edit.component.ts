import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';

import { Shipper } from '../shipper';
import { Extension } from '../../extension';
import { DeliveryType } from '../../delivery-type/delivery-type';
import { DeliveryTypeService } from '../../delivery-type/delivery-type.service';

@Component({
  selector: 'app-shipper-edit',
  templateUrl: './shipper-edit.component.html',
  styleUrls: ['./shipper-edit.component.css']
})
export class ShipperEditComponent implements OnInit, OnChanges {

  @Output()
  updateEvent = new EventEmitter<Shipper>();
  @Output()
  deleteEvent = new EventEmitter<Shipper>();
  @Input()
  item: Shipper;
  @Input()
  isCreate;

  deliverylist: DeliveryType[];

  constructor(private delivery_svc: DeliveryTypeService) {
    this.delivery_svc.look().subscribe(res => {
      this.deliverylist = res;
    });
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
