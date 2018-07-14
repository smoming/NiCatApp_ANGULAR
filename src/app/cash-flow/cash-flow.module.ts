import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from './cash-flow/cash-flow.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CashFlowRoutingModule
  ],
  declarations: [CashFlowComponent]
})
export class CashFlowModule { }
