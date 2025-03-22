import { MenuItem } from "@/data/menu";
export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, change: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
  getItemQuantity: (itemId: number) => number;
}
