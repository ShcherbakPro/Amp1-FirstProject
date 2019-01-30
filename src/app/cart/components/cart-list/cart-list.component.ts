import { Input, Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../products/models/product.model';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [CartService]
})
export class CartListComponent implements OnInit {
  public cart: Array<Product>;
  public isEmptyCartFlag = true;
  currentCartLength = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getProducts();
    this.isEmptyCartFlag = this.isEmptyCart(this.cart);
  }

  private isEmptyCart(cart: Array<Product>) {
    if (this.cart.length > 0) {
      return false;
    } else {
      return true;
    }
  }

}



