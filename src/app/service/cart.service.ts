import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  addItem(item: CartItem) {
    const existingItem = this.items.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  removeItem(itemName: string) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }
}
