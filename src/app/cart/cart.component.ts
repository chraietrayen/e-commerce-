import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { CartService } from '../products/services/cart.service';  // Import CartService
import { Observable } from 'rxjs';  // Import Observable for subscription

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],  // Add CommonModule here for *ngFor
  providers: [CartService]  // Add CartService to providers if needed
})
export class CartComponent implements OnInit {
  cartItems$: Observable<any[]>;  // Declare cartItems$ as Observable

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;  // Assign cartItems$ from the service
  }

  ngOnInit(): void {
    // Now, cartItems$ is already assigned, no need to subscribe here.
  }
}
