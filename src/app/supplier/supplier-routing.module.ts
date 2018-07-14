import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';

const routes: Routes = [
  { path: 'supplier',
    component: SupplierComponent,
    children: [
      { path: ':transNo', component: SupplierEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
