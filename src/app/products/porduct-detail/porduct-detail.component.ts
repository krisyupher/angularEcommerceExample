import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-porduct-detail',
  templateUrl: './porduct-detail.component.html',
  styleUrls: ['./porduct-detail.component.scss'],
})
export class PorductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
  }
}
