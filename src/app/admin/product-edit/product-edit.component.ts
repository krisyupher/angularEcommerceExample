import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../core/services/products/products.service';
import { MyValidators } from '../../utils/validators';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  addressForm = this.fb.group({
    title: ['', Validators.required],
    price: ['', [Validators.required, MyValidators.isPriceValid]],
    image: ['', Validators.required],
    description: '',
  });
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product) => {
        this.addressForm.patchValue(product);
      });
    });
  }
  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      this.productsService
        .updateProduct(this.id, this.addressForm.value)
        .subscribe((newProduct) => {
          this.router.navigate(['./admin/table']);
        });
    }
  }
}
