import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { Interceptor } from './interceptor';
import { AppComponent } from './app.component';

import { DeliveryTypeModule } from './delivery-type/delivery-type.module';
import { NationModule } from './nation/nation.module';
import { SupplierModule } from './supplier/supplier.module';
import { CommodityModule } from './commodity/commodity.module';
import { OrderModule } from './order/order.module';
import { TradingModule } from './trading/trading.module';
import { ReceiptModule } from './receipt/receipt.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ShipperModule } from './shipper/shipper.module';
import { CashFlowModule } from './cash-flow/cash-flow.module';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { SharedSnackBarComponent } from './shared-material/shared-snack-bar/shared-snack-bar.component';
import { HomeComponent } from './home/home.component';

const FORMATS_TW = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedMaterialModule,
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
            useClass: Interceptor,
            multi: true
        },
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'zh-TW'
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: FORMATS_TW
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 3000 }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
