import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';

const routes: Routes = [
  {
    path: 'purchase',
    component: PurchaseComponent,
    children: [
      { path: ':transNo', component: PurchaseEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
