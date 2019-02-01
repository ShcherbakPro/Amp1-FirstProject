import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from '../cart/components/cart/cart.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
