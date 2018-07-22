import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShipperRoutingModule } from './shipper-routing.module';
import { ShipperComponent } from './shipper/shipper.component';
import { ShipperEditComponent } from './shipper-edit/shipper-edit.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { ShipperQueryComponent } from './shipper-query/shipper-query.component';
import { UnshippedTradingComponent } from './unshipped-trading/unshipped-trading.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShipperRoutingModule,
    SharedMaterialModule
  ],
  declarations: [ShipperComponent, ShipperEditComponent, ShipperListComponent, ShipperQueryComponent, UnshippedTradingComponent]
})
export class ShipperModule { }
