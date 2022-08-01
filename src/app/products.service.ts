import {Subject} from 'rxjs';

export class ProductsService{
  
  
  
  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName );
    this.productsUpdate.next(productName);
  }

private products = ['A Book'];

productsUpdate = new Subject();


addProduct(productName: string){
  this.products.push(productName);
  this.productsUpdate.next(productName);
}

getProducts(){
    return [...this.products];
}



}