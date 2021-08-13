import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      (items) => {
        this.products = items;
      },
      (err) => {}
    );
  }
  addProduct(id: number) {
    console.log(id);
  }
}
