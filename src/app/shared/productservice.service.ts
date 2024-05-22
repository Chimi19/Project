import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [
    {
      id: 1,
      name: "Kaged Whey Protein Isolate",
      description: "This is a whey protein powder made with Kaged brand which contains all the essential amino acids that your body needs",
      price: "Nu.5999",
      offer: "Special Offer",
      imageURL: "assets/product1.png",
      link: "/o", 
      num: 5999
    },
    {
      id: 2,
      name: "Kaged Creatine Hydrochloride",
      description: "Best form of creatine for muscle growth.",
      price: "Nu.599",
      offer: "Special Offer",
      imageURL: "assets/product 1.jpg",
      link: "/1",
      num: 599
    },
    {
      id: 3,
      name: "Kaged Amino Synergy Capsules",
      description: "Amino pills to get you through your workouts",
      price: "Nu.599",
      offer: "New Arrival!",
      imageURL: "assets/amino-synergy.webp",
      link: "/2",
      num: 599
    },
    {
      id: 4,
      name: "Kaged Pre-Workout",
      description: "Made with the best ingredients to make sure you are ready for your day!",
      price: "Nu.699",
      offer: "Special offer",
      imageURL: "assets/image 4.png",
      link: "/3",
      num: 699
    }
  ];
totalprice: number = 0;
  newproduct: Product[] = [];
no : number = 0;
  getProducts(): Product[] {
    return this.products;
  }
  onIteminclude(product: Product): void {
    this.newproduct.push(product);
    this.no = this.newproduct.length;
    this.totalprice += product.num; // Update totalprice when item is added
    console.log("Product Ordered", this.newproduct);
    console.log(this.totalprice);
  }

  itemRemove(product: Product): void {
    
    this.totalprice -= product.num;
    console.log('Order Cancelled');
    console.log(this.totalprice);
  }  
 preset(){
  this.totalprice = 0;
 } 
}