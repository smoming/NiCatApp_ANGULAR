import { Component, OnInit } from '@angular/core';

import { DeliveryType } from '../delivery-type';
import { DeliveryTypeService } from '../delivery-type.service';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.css']
})
export class DeliveryTypeComponent implements OnInit {

  constructor(private svc: DeliveryTypeService) {
  }

  data: DeliveryType[];
  selected: DeliveryType;
  isCreate = false;
  saveMessage = '';

  ngOnInit() {
    this.svc.look().subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: DeliveryType) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    this.selected = new DeliveryType();
    this.isCreate = true;
  }

  doUpdate(item: DeliveryType) {
    if (this.isCreate) {
      this.svc.add(item).subscribe(res => {
        this.data.push(item);
        this.saveMessage = '新增成功';
        this.saved();
      }, err => console.log(err));
    } else {
      this.svc.update(item).subscribe(res => {
        this.data = this.data.map((v) => {
          if (v.ID === item.ID) {
            return Object.assign({}, v, item);
          }
          return v;
        });
        this.saveMessage = '修改成功';
        this.saved();
      }, err => console.log(err));
    }
  }

  doDelete(item: DeliveryType) {
    this.svc.delete(item).subscribe(res => {
      this.data = this.data.filter((v) => {
        return v.ID !== item.ID;
      });
      this.saveMessage = '刪除成功';
      this.saved();
    }, err => console.log(err));
  }

  saved() {
    this.selected = null;
    this.isCreate = false;

    this.sort();
    setTimeout(() => {
      this.saveMessage = '';
    }, 3000);
  }

  sort() {
    this.data.sort((a, b) => {
      return a.ID > b.ID ? 1 : -1;
    });
  }

}
