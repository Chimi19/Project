import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService} from 'src/app/shared/productservice.service';
import { Product } from 'src/app/shared/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  no: number = 0;
price: number = 0;
  constructor(private productService: ProductService, private changedetector: ChangeDetectorRef)  {
   
  }

  ngOnInit(): void {
    this.products = this.productService.newproduct;
    this.no = this.products.length;
    this.updatePrice(); 
  }

  itemRemoval(prod: Product, index: number) {
  this.productService.itemRemove(prod)
  this.products.splice(index, 1);
    this.no = this.products.length;
   this.price = this.productService.totalprice
  }

  private updatePrice(): void {
    this.price = this.products.reduce((total, prod) => total + prod.num, 0);
    this.changedetector.detectChanges(); 
  }

  }

