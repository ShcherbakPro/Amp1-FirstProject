import { Component, OnInit } from '@angular/core';

enum Categories { White, Black, Color }


class TV {
  constructor(public model: string, public type: Categories) { }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  name = 'Printer';
  description = 'LaserJet';
  price = 1200;
  numberOfCategory = Categories.Black;
  category: string = Categories[1];
  isAvailable = true;
  list: number[] = [1, 2, 3];
  list2: Array<number> = [1, 2, 3];
  public tv: TV;

  constructor() {
    this.tv = new TV('Samsung', Categories.Color);
  }

  ngOnInit() {
  }
  onBuy() {
    console.log('New Product');
    console.log(this.list[1]);
    console.log(this.list2[2]);
  }
}
