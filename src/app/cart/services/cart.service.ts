import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart?: Array<Product>;
  constructor() { }
  // this.cart.push(new Product(1, 'Scanner', 'Noname', true)); this.cart.push(new Product(2, 'TV', 'Noname', false));

  getProducts(): Array<Product> {
    return this.cart;
  }
  public addProduct(product: Product) {
    this.cart.push(product);
    console.log('log:' + product.productModel);
  }
  // public addProduct(cart, currentCartLength, formModel, formVendor ) {
  //   currentCartLength = cart.length + 1;
  //   cart.push(new Product(currentCartLength, formModel, formVendor , true ));
  //   cart.forEach((v) => {
  //     console.log (v);
  //   });
  // }
}
