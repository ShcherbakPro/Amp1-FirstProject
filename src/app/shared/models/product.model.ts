interface IProduct {
    ProductId: number;
    ProductName?: string;
    ProductModel?: string;
}
export class Product implements IProduct {
    constructor(public ProductId: number, public ProductName: string, public ProductModel: string) { }
    }
