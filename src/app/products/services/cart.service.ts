import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  // Observable to get current cart items
  get cartItems$() {
    return this.cartItemsSubject.asObservable();
  }

  // Add item to the cart
  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  // Remove item from the cart
  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.cartItemsSubject.next(this.cartItems);
  }
}
