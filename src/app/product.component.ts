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
  active =true;


  getClasses(id:number):string{
    let product = this.model.getProductById(id);
    return ((product?.price === undefined ? 0 : product?.price) <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2";
  }
 
  getClassesMap(id:number):Object{
    let product = this.model.getProductById(id);
    return{
      "bg-info": product?.price === undefined ? 0: product?.price ,
      "text-center text-white": product.name=="Samsung S22"
    }
  }
  //degisken olusturmamız lazım
  color: string ="red";
  fontSize: string ="25px";

  getStyles(id:number){
    let product = this.model.getProductById(id);
    return{
      fontSize:"25px",
      color:product?.price === undefined ? 0: product?.price ?"green":"red"
    }
  }

}