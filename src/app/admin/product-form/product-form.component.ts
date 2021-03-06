import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { MyValidators } from '../../utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  addressForm = this.fb.group({
    id: Math.floor(Math.random() * (300 - 1) + 1).toString(),
    title: ['', Validators.required],
    price: ['', [Validators.required, MyValidators.isPriceValid]],
    image: ['', Validators.required],
    description: '',
  });

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      this.productsService
        .createProduct(this.addressForm.value)
        .subscribe((newProduct) => {
          this.router.navigate(['./admin/table']);
        });
    }
  }
}
