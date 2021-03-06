import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NationRoutingModule } from './nation-routing.module';
import { NationComponent } from './nation/nation.component';
import { NationListComponent } from './nation-list/nation-list.component';
import { NationEditComponent } from './nation-edit/nation-edit.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NationRoutingModule,
    SharedMaterialModule
  ],
  declarations: [NationComponent, NationListComponent, NationEditComponent]
})
export class NationModule { }
