import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule 
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
