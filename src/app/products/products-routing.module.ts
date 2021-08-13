import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorductDetailComponent } from './porduct-detail/porduct-detail.component';
import { ProductsContainer } from './products.container';
const routes: Routes = [
  {
    path: '',
    component: ProductsContainer,
  },
  {
    path: ':id',
    component: PorductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
