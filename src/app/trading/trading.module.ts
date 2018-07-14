import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TradingRoutingModule } from './trading-routing.module';
import { TradingComponent } from './trading/trading.component';
import { TradingEditComponent } from './trading-edit/trading-edit.component';
import { TradingListComponent } from './trading-list/trading-list.component';
import { TradingQueryComponent } from './trading-query/trading-query.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TradingRoutingModule
  ],
  declarations: [TradingComponent, TradingEditComponent, TradingListComponent, TradingQueryComponent]
})
export class TradingModule { }
