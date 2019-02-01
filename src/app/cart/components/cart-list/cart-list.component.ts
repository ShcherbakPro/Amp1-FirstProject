import { Input, Component, OnInit, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../products/models/product.model';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [CartService],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class CartListComponent implements OnInit {
  public cart: Cart;
  @Input() cartItems: Cart;
  @Output() cartChange = new EventEmitter();

  public isEmptyCartFlag = true;
  currentCartLength = 0;

  public myValue = 2;

  myValueChange($event) {
    console.log($event);
    this.cartItems = this.cartService.getCart();
  }


  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItems = this.cartService.getCart();
    this.isEmptyCartFlag = this.isEmptyCart();
    console.log('init cartlistcomp');  }

  private isEmptyCart() {
    if (this.cart.items.length > 0) {
      return false;
    } else {
      return true;
    }
  }
    getCartItems() {
      this.cartItems = this.cartService.getCart();
      this.cartChange.emit({
        value: this.cartItems
      });
    }


}



