import { Component, OnInit } from '@angular/core';
import { Commodity } from '../commodity';
import { CommodityService } from '../commodity.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSnackBarComponent } from '../../shared-material/shared-snack-bar/shared-snack-bar.component';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  constructor(private svc: CommodityService, private snackbar: MatSnackBar) {
  }

  data: Commodity[];
  selected: Commodity;
  isCreate = false;

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
        // this.data = this.data.map((v) => {
        //   return v;
        // });
        this.showMsg(BooleanMessage.CreateSuccess('新增成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    } else {
      this.svc.update(item).subscribe(res => {
        // this.data = this.data.map((v) => {
        //   if (v.ID === item.ID) {
        //     return Object.assign({}, v, item);
        //   }
        //   return v;
        // });
        this.showMsg(BooleanMessage.CreateSuccess('修改成功'));
        this.saved();
      }, err => {
        this.showMsg(BooleanMessage.CreateFail(err));
        console.log(err);
      });
    }
  }

  doDelete(item: Commodity) {
    this.svc.delete(item).subscribe(res => {
      // this.data = this.data.filter((v) => {
      //   return v.ID !== item.ID;
      // });
      this.showMsg(BooleanMessage.CreateSuccess('刪除成功'));
      this.saved();
    }, err => {
      this.showMsg(BooleanMessage.CreateFail(err));
      console.log(err);
    });
  }

  saved() {
    this.selected = null;
    this.isCreate = false;

    this.reload();
    this.sort();
  }

  showMsg(bm: BooleanMessage) {
    this.snackbar.openFromComponent(SharedSnackBarComponent, { data: bm });
  }
  sort() {
    this.data.sort((a, b) => {
      return a.ID > b.ID ? 1 : -1;
    });
  }

}
