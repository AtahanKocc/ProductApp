// liste üzerinde islem yapacak olan kısım

import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor(){
        this.dataSource = new SimpleDataSource(); 
        this.products = new Array<Product>(); //basta dizi olarak tanımlayacagız
        this.dataSource.getProducts().forEach(p=>this.products.push(p)); // getProducttan gelen her bir elemanı foreach ile dolas her bir product a icerisinde bulunmus oldugumuz product repository icine push ile ekle
    }
    getProducts(): Product[]{
        return this.products; //uzunlugunu yazdıır.
    }
    //disaridan id bilgisi alıp bize product gönderecek.
    getProductById(id: number): Product{
        return this.products.find(p => p.id == id)!;
    }
}

//datasource icerisindeki veriyi productrepository icerisindeki product a aktaralım.
