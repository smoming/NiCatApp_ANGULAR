import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSanckBarComponent } from '../../shared-material/shared-sanck-bar/shared-sanck-bar.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private svc: SupplierService, private sanckbar: MatSnackBar) {
  }

  data: Supplier[];
  selected: Supplier;
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

  doSelect(item: Supplier) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    this.selected = new Supplier();
    this.isCreate = true;
  }

  doUpdate(item: Supplier) {
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

  doDelete(item: Supplier) {
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
    this.sanckbar.openFromComponent(SharedSanckBarComponent, { data: bm });
  }

  sort() {
    this.data.sort((a, b) => {
      return a.ID > b.ID ? 1 : -1;
    });
  }

}
