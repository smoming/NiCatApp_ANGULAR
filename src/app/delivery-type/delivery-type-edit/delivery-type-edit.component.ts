import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DeliveryType } from '../delivery-type';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-type-edit',
  templateUrl: './delivery-type-edit.component.html',
  styleUrls: ['./delivery-type-edit.component.css']
})
export class DeliveryTypeEditComponent implements OnInit {

  @Output()
  updateEvent = new EventEmitter<DeliveryType>();
  @Output()
  deleteEvent = new EventEmitter<DeliveryType>();
  @Input()
  item: DeliveryType;
  @Input()
  isCreate;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.load();
  }

  update() {
    this.updateEvent.emit(this.item);
  }

  delete() {
    this.deleteEvent.emit(this.item);
  }

  cancel() {
    this.item = null;
  }

}
