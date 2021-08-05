import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table',
      },
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
