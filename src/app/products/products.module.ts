import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../Material/material.module';

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { PorductDetailComponent } from './porduct-detail/porduct-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, PorductDetailComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
