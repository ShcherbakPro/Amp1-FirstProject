import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Scanner', 'Noname'),
      new Product(2, 'TV', 'Noname')
    ];
  }
}
