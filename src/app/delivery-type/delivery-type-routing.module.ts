import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';
import { DeliveryTypeEditComponent } from './delivery-type-edit/delivery-type-edit.component';

const routes: Routes = [
  {
    path: 'deliverytype',
    component: DeliveryTypeComponent,
    children: [
      { path: ':id', component: DeliveryTypeEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryTypeRoutingModule { }
