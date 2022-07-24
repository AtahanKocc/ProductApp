import {Component} from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from './product.model';

@Component({
    selector:"app",
    templateUrl: "product.component.html",
    styleUrls:["product.component.css"]
})

export class ProductComponent{
  //icerik -data hazırlıyoruz burada olusanlara component.html den ulasilacak
  model: ProductRepository = new ProductRepository();
 // active =true;
 
}

