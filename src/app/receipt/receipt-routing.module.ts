import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component';

const routes: Routes = [
  {
    path: 'receipt',
    component: ReceiptComponent,
    children: [
      { path: ':transNo', component: ReceiptEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }
