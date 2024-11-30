import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { RouterModule } from '@angular/router';  // Import RouterModule for routerLink

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule]  // Add RouterModule to imports here
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: 'path-to-image' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: 'path-to-image' }
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    console.log(`Product added to cart: ${product.name}`);
  }

  removeFromCart(productId: number): void {
    console.log(`Product removed from cart with ID: ${productId}`);
  }
}
