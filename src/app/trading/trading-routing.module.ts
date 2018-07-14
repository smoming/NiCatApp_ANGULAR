import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradingComponent } from './trading/trading.component';
import { TradingEditComponent } from './trading-edit/trading-edit.component';

const routes: Routes = [
  {
    path: 'trading',
    component: TradingComponent,
    children: [
      { path: ':transNo', component: TradingEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
