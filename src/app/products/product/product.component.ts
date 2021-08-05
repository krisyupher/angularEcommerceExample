import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '1',
    title: 'cam,iseta',
    price: 800,
    description: 'allala',
    image: 'ñrlrlr',
  };
  @Output() productClicked = new EventEmitter<any>();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    var ngOnInit = '';
  }

  addCart() {
    this.cartService.addCart(this.product);
    /* this.productClicked.emit(this.product.id); */
  }
}
