import { Input, Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Product } from 'src/app/shared/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  public cart: Array<Product>;
  public isEmptyCartFlag = true;
  currentCartLength = 0;
  name = 'Tom';
  age = 24;
  // @Input() tmp: string;
  @Input() formVendor = 'Noname';
  public formModel = 'Noname';
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getProducts();
    this.isEmptyCartFlag = this.isEmptyCart(this.cart);
  }
  public onAddProduct() {
    this.cartService.addProduct(this.cart, this.currentCartLength, this.formModel, this.formVendor);
    // this.currentCartLength = this.cart.length + 1;
    // this.cart.push(new Product(this.currentCartLength, this.formModel, this.formVendor ));
    // this.cart.forEach((v) => {
    //   console.log (v);
    // });
    // this.formModel = '';
    // this.formVendor = '';
  }
  private isEmptyCart(cart: Array<Product>) {
    if (this.cart.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
