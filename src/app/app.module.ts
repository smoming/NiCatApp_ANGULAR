import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryTypeModule } from './delivery-type/delivery-type.module';
import { NationModule } from './nation/nation.module';
import { SupplierModule } from './supplier/supplier.module';
import { CommodityModule } from './commodity/commodity.module';
import { OrderModule } from './order/order.module';

import { RequestInterceptor } from './request-interceptor';
import { ResponseInterceptor } from './response-interceptor';
import { TradingModule } from './trading/trading.module';
import { ReceiptModule } from './receipt/receipt.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ShipperModule } from './shipper/shipper.module';
import { CashFlowModule } from './cash-flow/cash-flow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeliveryTypeModule,
    NationModule,
    SupplierModule,
    CommodityModule,
    OrderModule,
    ReceiptModule,
    PurchaseModule,
    TradingModule,
    ShipperModule,
    CashFlowModule
  ],
  providers: [
    {
      // request
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      // response
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
