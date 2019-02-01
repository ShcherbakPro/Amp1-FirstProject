import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartService} from '../../../../cart/services/cart.service';
import { Cart } from 'src/app/cart/models/cart.model';
// enum Categories { White, Black, Color }


// class TV {
//   constructor(public model: string, public type: Categories) { }
// }

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']

})
export class ProductComponent {
  @Input()
  product: Product;
  clickMessage: string;
  cart: Array<Product>; // Cart;
  // public cart: Cart;
  // count = 0;
  @Output()
  complete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productsService: ProductService, private cartService: CartService) { }

  onCompleteTask(): void {
    console.log('product component, completeTask method:', this.product);
    this.complete.emit(this.product);
  }
    onAddProduct(): void {
      // this.count++;
      // console.log($event);
      this.cartService.addProduct(this.product);
      console.log(this.product);
      this.clickMessage = 'You clicked the button';
      this.cart = this.cartService.getCart().items;
      // this.cartItems = this.cartService.getCart();
    }
    myCartChange($event) {
      console.log($event);
       // this.cart = this.cartService.getCart();
     }

}



