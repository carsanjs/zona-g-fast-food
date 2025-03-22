"use client";
import { createContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { MenuItem } from "@/data/menu";
import { CartContextType, CartItem } from "@/utils/types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const deliveryFee = 2.5;

  // Recuperar el carrito del localStorage cuando se monta el componente
  useEffect(() => {
    const storedCart = localStorage.getItem("sabor3d-cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Actualizar localStorage cuando cambia el carrito
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("sabor3d-cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("sabor3d-cart");
    }

    // Calcular subtotal y total
    const newSubtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal > 0 ? newSubtotal + deliveryFee : 0);
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    toast.success(`${item.name} agregado al carrito`);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    toast.success("Producto eliminado del carrito");
  };

  const updateQuantity = (itemId: number, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = Math.max(0, item.quantity + change);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Carrito vaciado correctamente");
  };

  const getItemQuantity = (itemId: number): number => {
    const item = cart.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        total,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
