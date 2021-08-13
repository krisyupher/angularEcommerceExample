import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/product.model';
import { environment } from '../../../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { handleHttpResponseError } from '../../../utils/Errors';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http
      .get<Product[]>(`${environment.url_api}/products`)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  getProduct(id: string) {
    return this.http
      .get<Product>(`${environment.url_api}/prodsaducts/${id}`)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  createProduct(product: Product) {
    return this.http
      .post(`${environment.url_api}/products`, product)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  updateProduct(id: string, productPartial: Partial<Product>) {
    return this.http
      .put(`${environment.url_api}/products/${id}`, productPartial)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  DeleteProduct(id: string) {
    return this.http
      .delete(`${environment.url_api}/products/${id}`)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
}
