import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';




@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent] // baslangıc comp. olmasını sagladık.
})
export class AppModule { }
