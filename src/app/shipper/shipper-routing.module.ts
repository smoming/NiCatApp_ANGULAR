import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipperComponent } from './shipper/shipper.component';
import { ShipperEditComponent } from './shipper-edit/shipper-edit.component';

const routes: Routes = [
  { path: 'shipper',
    component: ShipperComponent,
    children: [
      { path: ':transNo', component: ShipperEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
