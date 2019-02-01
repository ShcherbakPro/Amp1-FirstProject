import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  cart: Cart = new Cart();
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
