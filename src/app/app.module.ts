import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';




@NgModule({
  declarations: [
    ProductComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent] // baslangıc comp. olmasını sagladık.
})
export class AppModule { }
