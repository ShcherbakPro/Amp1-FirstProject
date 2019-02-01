import { Product } from '../../products/models/product.model';
export class Cart {
    items: Array<Product> = [new Product(1, 'Scanner', 'HP', true), new Product(2, 'TV', 'LG', false)];
    constructor() {
        // console.log(this.items[1]);
       // console.log(this.lastChange());
    }
    // public productId: number, public productName: string, public productModel: string, public productCount: number
    // lastChange() {
    //     return new Date();
    //   }
}
