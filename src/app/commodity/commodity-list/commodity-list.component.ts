import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Commodity } from '../commodity';

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Commodity>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Commodity) {
    this.selectEvent.emit(item);
  }

}
