import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Nation } from '../nation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nation-edit',
  templateUrl: './nation-edit.component.html',
  styleUrls: ['./nation-edit.component.css']
})
export class NationEditComponent implements OnInit {

  @Output()
  updateEvent = new EventEmitter<Nation>();
  @Output()
  deleteEvent = new EventEmitter<Nation>();
  @Input()
  item: Nation;
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
