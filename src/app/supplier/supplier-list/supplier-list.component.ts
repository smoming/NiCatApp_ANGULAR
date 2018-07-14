import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  @Input()
  datalist;

  @Output()
  selectEvent = new EventEmitter<Supplier>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(item: Supplier) {
    this.selectEvent.emit(item);
  }

}
