import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartListComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
