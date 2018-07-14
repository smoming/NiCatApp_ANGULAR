import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Trading } from '../../trading/trading';

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
