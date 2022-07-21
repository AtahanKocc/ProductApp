//product model ile alakalı bize bir liste döndürecek
//product classını kullanan

import { Product } from "./product.model";

export class SimpleDataSource{
    //dizi tanımlaması yapalım
   private products: Product[];
   
   constructor(){
    this.products= new Array<Product>(
        new Product(1,"Samsung S22", "İyi telefon","1.jpg",20000),
        new Product(2,"Iphone 11", "İyi telefon","2.jpg",14000),
        new Product(3,"Iphone SE22", "İyi telefon","3.jpg",15000),
        new Product(4,"Iphone 12", "İyi telefon","4.jpg",20000),
        new Product(5,"Iphone 13", "İyi telefon","5.jpg",30000),
    );
   }
   //yapı private bunu dışarıya getProducts ile açmamız lazım
   getProducts(): Product[]{
    return this.products; // bize private üyeyi dışarıya public olarak açacak.
   }
}

// sanal veritabanı diyebiliriz.