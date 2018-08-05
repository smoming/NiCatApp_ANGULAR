import { Component, OnInit } from '@angular/core';
import { Nation } from '../nation';
import { NationService } from '../nation.service';
import { BooleanMessage } from '../../shared-material/boolean-message';
import { SharedSanckBarComponent } from '../../shared-material/shared-sanck-bar/shared-sanck-bar.component';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent implements OnInit {

  constructor(private svc: NationService, private snackbar: MatSnackBar) {
  }

  data: Nation[];
  selected: Nation;
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

  doSelect(item: Nation) {
    this.selected = Object.assign({}, item);
    this.isCreate = false;
  }

  doCreate() {
    this.selected = new Nation();
    this.isCreate = true;
  }

  doUpdate(item: Nation) {
    if (this.isCreate) {
      this.svc.add(item).subscribe(res => {
        // this.data.push(item);
        // this.data = this.data.map((v) => {
        //   return v;
        // });
        this.showMsg(BooleanMessage.CreateSuccess('新增成功'));
        this.saved();
      }, err => {
        BooleanMessage.CreateFail(err);
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
        BooleanMessage.CreateFail(err);
        console.log(err);
      });
    }
  }

  doDelete(item: Nation) {
    this.svc.delete(item).subscribe(res => {
      // this.data = this.data.filter((v) => {
      //   return v.ID !== item.ID;
      // });
      this.showMsg(BooleanMessage.CreateSuccess('刪除成功'));
      this.saved();
    }, err => {
      BooleanMessage.CreateFail(err);
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
    this.snackbar.openFromComponent(SharedSanckBarComponent, { data: bm });
  }

  sort() {
    this.data.sort((a, b) => {
      return a.ID > b.ID ? 1 : -1;
    });
  }

}
