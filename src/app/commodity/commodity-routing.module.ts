import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommodityComponent } from './commodity/commodity.component';
import { CommodityEditComponent } from './commodity-edit/commodity-edit.component';

const routes: Routes = [
  {
    path: 'commodity',
    component: CommodityComponent,
    children: [
      { path: ':id', component: CommodityEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommodityRoutingModule { }
