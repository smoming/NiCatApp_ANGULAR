import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { Order } from '../../order/order';

@Component({
  selector: 'app-unpurchased-order',
  templateUrl: './unpurchased-order.component.html',
  styleUrls: ['./unpurchased-order.component.css']
})
export class UnpurchasedOrderComponent implements OnInit, OnChanges {

  @Input()
  datalist: Order[];

  @Output()
  payEvent = new EventEmitter<string[]>();
  @Output()
  cancelpayEvent = new EventEmitter<void>();

  paylist: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.datalist);
  }

  doPay() {
    this.payEvent.emit(this.paylist);
    this.paylist = [];
  }

  cancel() {
    this.cancelpayEvent.emit();
  }

  docheck(item: Event) {
    const check = (<HTMLInputElement>item.target);
    const transno = check.getAttribute('data-transno');
    // console.log(check.checked);
    // console.log(check.getAttribute('data-transno'));
    if (check.checked) {
      this.paylist.push(transno);
    } else {
      this.paylist = this.paylist.filter(v => {
        return v !== transno;
      });
    }
  }

}
