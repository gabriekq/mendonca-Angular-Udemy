import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from './products.service';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit , OnDestroy {
  

  productName = 'A Book';
  isDisabled = true;
  products = [''];
  private productSubscription = new Subscription();


  constructor(private productService : ProductsService) {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
      
    }, 3000)
  }
   
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productsUpdate.subscribe( () => {
      this.products = this.productService.getProducts();
    } );
  }

  onAddProduct(form: NgForm) {

    if (form.valid) {
     // this.products.push(this.productName);
     this.productService.addProduct(form.value.productName);
    }


  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p != productName);
  }

}