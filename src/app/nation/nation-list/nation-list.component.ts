import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Nation } from '../nation';

@Component({
  selector: 'app-nation-list',
  templateUrl: './nation-list.component.html',
  styleUrls: ['./nation-list.component.css']
})
export class NationListComponent implements OnInit, OnChanges {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Nation>();

  constructor() { }

  ngOnInit() {
    // console.log('=====datalist=====');
    // console.log(this.datalist);
  }

  ngOnChanges() {
    // console.log('=====datalist=====');
    // console.log(this.datalist);
  }

  doSelect(item: Nation) {
    // console.log('=====select=====');
    // console.log(item);
    this.selectEvent.emit(item);
  }

}
