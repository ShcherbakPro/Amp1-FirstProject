import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<Product>;
  @Output()
  complete: EventEmitter<Product> = new EventEmitter();
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  onBuy() {
    // console.log('New Product');
    // console.log(this.list[1]);
    // console.log(this.list2[2]);
  }
  onCompleteTask(product: Product): void {
    console.log('product-list component, completeTask method', product);
    this.complete.emit(product);
  }
}



