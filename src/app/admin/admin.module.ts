import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';

import { MaterialModule } from '../Material/material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ],
})
export class AdminModule {}
