import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Commodity } from '../commodity';
import { Router, ActivatedRoute } from '@angular/router';
import { NationService } from '../../nation/nation.service';
import { Nation } from '../../nation/nation';
import { SupplierService } from '../../supplier/supplier.service';
import { Supplier } from '../../supplier/supplier';

@Component({
  selector: 'app-commodity-edit',
  templateUrl: './commodity-edit.component.html',
  styleUrls: ['./commodity-edit.component.css']
})
export class CommodityEditComponent implements OnInit {

  @Output()
  updateEvent = new EventEmitter<Commodity>();
  @Output()
  deleteEvent = new EventEmitter<Commodity>();
  @Input()
  item: Commodity;
  @Input()
  isCreate;

  nationlist: Nation[];
  supplierlist: Supplier[];

  constructor(private router: Router, private route: ActivatedRoute,
    private nation_svc: NationService, private supplier_svc: SupplierService) {
    // this.nationlist = this.nation_svc.look();
    this.nation_svc.look().subscribe(res => {
      this.nationlist = res;
    });
    // this.supplierlist = this.supplier_svc.look();
    this.supplier_svc.look().subscribe(res => {
      this.supplierlist = res;
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
