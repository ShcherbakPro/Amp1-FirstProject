import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartService} from '../../../../cart/services/cart.service';
import { Cart } from 'src/app/cart/models/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']

})
export class ProductComponent {
  @Input() product: Product;
  clickMessage: string;
  cart: Cart; // Array<Product>
  @Output()
  complete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productsService: ProductService, private cartService: CartService) { }

  onCompleteTask(): void {
    console.log('product component, completeTask method:', this.product);
    this.complete.emit(this.product);
  }
    onAddProduct(): void {
      this.cartService.addProduct(this.product);
      // console.log(this.product);
      this.clickMessage = 'You clicked the button';
      this.cart = this.cartService.getCart();
    }
    myCartChange($event) {
      console.log($event);
      this.cart = this.cartService.getCart();
     }

}



