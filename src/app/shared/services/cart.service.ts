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
  addProduct(cart, currentCartLength, formModel, formVendor ) {
    currentCartLength = cart.length + 1;
    cart.push(new Product(currentCartLength, formModel, formVendor ));
    cart.forEach((v) => {
      console.log (v);
    });
  }
}
