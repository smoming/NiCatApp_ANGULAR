import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationComponent } from './nation/nation.component';
import { NationEditComponent } from './nation-edit/nation-edit.component';

const routes: Routes = [
  {
    path: 'nation',
    component: NationComponent,
    children: [
      { path: ':id', component: NationEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationRoutingModule { }
