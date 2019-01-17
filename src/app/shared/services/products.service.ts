import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Printer', 'HP Laserjet'),
      new Product(2, 'Monitor', 'Samsung')
    ];
  }

}
