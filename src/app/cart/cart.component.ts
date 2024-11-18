import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../service/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeFromCart(itemName: string) {
    this.cartService.removeItem(itemName);
    this.cartItems = this.cartService.getItems();
  }
}

