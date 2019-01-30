import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartService} from '../../../../cart/services/cart.service';
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
  @Output()
  complete: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private productsService: ProductService, private cartService: CartService) { }

  onCompleteTask(): void {
    this.cartService.addProduct(this.product);
    console.log('product component, completeTask method:', this.product);
    this.complete.emit(this.product);
  }
  // name = 'Printer';
  // description = 'LaserJet';
  // price = 1200;
  // numberOfCategory = Categories.Black;
  // category: string = Categories[1];
  // isAvailable = true;
  // list: number[] = [1, 2, 3];
  // list2: Array<number> = [1, 2, 3];
  // public tv: TV;

  // constructor() {
  //   this.tv = new TV('Samsung', Categories.Color);
  // }

  // ngOnInit() {
  // }

}



