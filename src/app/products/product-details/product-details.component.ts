import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like *ngFor
import { CartService } from '../services/cart.service';  // Correct import path for CartService

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CommonModule],  // Add CommonModule here for *ngFor
  providers: [CartService]  // Add CartService to providers here
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: any;
  isModalOpen = false;
  currentImageIndex = 0;
  currentImage = '';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService  // Inject CartService here
  ) {
    this.productId = 0;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.product = this.getProductById(this.productId);
    }
  }

  getProductById(id: number) {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is the description for Product 1',
        price: 19.99,
        image: 'assets/images/ZoomImage.jpg',
        thumbnails: [
          'assets/images/tshirt.jpg',
          'assets/images/tshirt1.jpg',
          'assets/images/tshirt2.jpg',
          'assets/images/tshirt3.jpg',
          'assets/images/tshirt.jpg'
        ]
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'This is the description for Product 2',
        price: 29.99,
        image: 'assets/images/prod2.jpg',
        thumbnails: [
          'path/to/prod2_image1.jpg',
          'path/to/prod2_image2.jpg'
        ]
      }
      // Add more products as needed
    ];

    return products.find(p => p.id === id);
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);  // Add the product to the cart using the service
      console.log(`Product ${this.product.name} added to cart`);  // Log for debugging
    }
  }

  openModal(image: string) {
    this.currentImageIndex = this.product.thumbnails.indexOf(image);
    this.currentImage = image;
    this.isModalOpen = true;
  }

  closeModal(event: any) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
      this.isModalOpen = false;
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.thumbnails.length;
    this.currentImage = this.product.thumbnails[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.thumbnails.length) % this.product.thumbnails.length;
    this.currentImage = this.product.thumbnails[this.currentImageIndex];
  }
}
