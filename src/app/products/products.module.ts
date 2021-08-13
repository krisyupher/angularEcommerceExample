import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../Material/material.module';

import { ProductComponent } from './product/product.component';
import { ProductsContainer } from './products.container';
import { PorductDetailComponent } from './porduct-detail/porduct-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsContainer, ProductComponent, PorductDetailComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
