import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  cart: Cart = new Cart();
  // cart: Array<Product> = [new Product(1, 'Scanner', 'HP', true), new Product(2, 'TV', 'LG', false)];
  constructor() { }
  ngOnInit() {

  }
  getCart(): Cart {
    return this.cart;
  }
  public addProduct(product: Product) {
    this.cart.items.push(product);
    console.log('log:' + product.productModel);
  }
}
