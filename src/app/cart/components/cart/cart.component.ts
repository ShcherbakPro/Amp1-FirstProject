import {  Input, Component, OnInit, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input()counterValue = 0;
  @Output() counterChange = new EventEmitter();
  @Input() cartItems: Cart;
  @Output() cartChange = new EventEmitter();
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    });
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    });
  }
}
