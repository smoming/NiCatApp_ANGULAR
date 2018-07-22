import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommodityRoutingModule } from './commodity-routing.module';
import { CommodityComponent } from './commodity/commodity.component';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { CommodityEditComponent } from './commodity-edit/commodity-edit.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommodityRoutingModule,
    SharedMaterialModule
  ],
  declarations: [CommodityComponent, CommodityListComponent, CommodityEditComponent]
})
export class CommodityModule { }
