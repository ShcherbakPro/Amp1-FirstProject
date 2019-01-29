interface IProduct {
    productId: number;
    productName?: string;
    productModel?: string;
}
export class Product implements IProduct {
    constructor(public productId: number, public productName: string, public productModel: string) { }
    }
