import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products;
  model: ProductRepository;
  selectedProduct: string | undefined;
  constructor() { 
    this.model =new ProductRepository();
    this.products = this.model.getProducts(); //products bilgisini de getProduct metodu ile doldur
  }
  getSelected(product:Product):boolean{
     return product.name == this.selectedProduct;
  }

}
