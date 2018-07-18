import { Component, OnInit } from '@angular/core';
import { Commodity } from '../commodity';
import { CommodityService } from '../commodity.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  constructor(private svc: CommodityService) {
  }

  data: Commodity[];
  selected: Commodity;
  isCreate = false;
  saveMessage = '';

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.svc.look().subscribe(res => {
      this.data = res;
      this.sort();
    });
  }

  doSelect(item: Commodity) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    this.selected = new Commodity();
    this.isCreate = true;
  }

  doUpdate(item: Commodity) {
    if (this.isCreate) {
      this.svc.add(item).subscribe(res => {
        // this.data.push(item);
        this.saveMessage = '新增成功';
        this.saved();
      }, err => console.log(err));
    } else {
      this.svc.update(item).subscribe(res => {
        // this.data = this.data.map((v) => {
        //   if (v.ID === item.ID) {
        //     return Object.assign({}, v, item);
        //   }
        //   return v;
        // });
        this.saveMessage = '修改成功';
        this.saved();
      }, err => console.log(err));
    }
  }

  doDelete(item: Commodity) {
    this.svc.delete(item).subscribe(res => {
      // this.data = this.data.filter((v) => {
      //   return v.ID !== item.ID;
      // });
      this.saveMessage = '刪除成功';
      this.saved();
    }, err => console.log(err));
  }

  saved() {
    this.selected = null;
    this.isCreate = false;

    this.reload();
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