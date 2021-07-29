import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-porduct-detail',
  templateUrl: './porduct-detail.component.html',
  styleUrls: ['./porduct-detail.component.scss'],
})
export class PorductDetailComponent implements OnInit {
  product: Product = {
    id: '0',
    title: '',
    price: 0,
    description: '',
    image: '',
  };
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productsService.getProduct(params.id).subscribe((items) => {
        if (items !== null) {
          this.product = items;
        }
      });
    });
  }
}
