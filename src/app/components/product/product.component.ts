import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';

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
  constructor() {}

  ngOnInit(): void {}

  addCart() {
    this.productClicked.emit(this.product.id);
  }
}
