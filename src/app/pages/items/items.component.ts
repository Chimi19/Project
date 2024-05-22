import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/productservice.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  clickedProduct: Product | null = null;
  products: Product[];
  price: number =0;
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onIteminclude(product: Product): void {
    this.productService.onIteminclude(product);
      this.price += product.num;
    this.clickedProduct = product;
  }
}