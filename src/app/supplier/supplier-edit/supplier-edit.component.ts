import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Supplier } from '../supplier';
import { Router, ActivatedRoute } from '@angular/router';
import { Nation } from '../../nation/nation';
import { NationService } from '../../nation/nation.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  @Output()
  updateEvent = new EventEmitter<Supplier>();
  @Output()
  deleteEvent = new EventEmitter<Supplier>();
  @Input()
  item: Supplier;
  @Input()
  isCreate;

  nationlist: Nation[];

  constructor(private router: Router, private route: ActivatedRoute, private nation_svc: NationService) {
    // this.nationlist = this.nation_svc.look();
    this.nation_svc.look().subscribe(res => {
      this.nationlist = res;
    });
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
