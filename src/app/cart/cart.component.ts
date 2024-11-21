import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../service/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(itemName: string): void {
    this.cartItems = this.cartItems.filter(item => item.name !== itemName);
    this.cartService.clearCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  updateCart(): void {
    // Método opcional, caso precise salvar mudanças ao atualizar quantidade.
    console.log('Carrinho atualizado:', this.cartItems);
  }
}

