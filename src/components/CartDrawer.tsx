"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hook/useCart";

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, subtotal, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Abrir carrito"
        >
          <ShoppingCart className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#9b2d1d] text-white text-xs flex items-center justify-center">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" /> Tu Carrito
          </SheetTitle>
        </SheetHeader>

        {cart.length > 0 ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 py-6 overflow-y-auto">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center py-4 border-b"
                  >
                    <div className="h-16 w-16 bg-orange-50 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-gray-500 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4 sticky bottom-0 bg-white">
              <div className="space-y-1 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between pt-2 border-t mt-2">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-orange-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
                  asChild
                >
                  <Link href="/orden">Completar Pedido</Link>
                </Button>
                <Button
                  className="w-full bg-green-600 border-amber-100 text-white"
                  variant="outline"
                  onClick={() =>
                    window.open(
                      `https://wa.me/1234567890?text=${encodeURIComponent(
                        `Hola, me gustaría ordenar los siguientes productos:\n${cart
                          .map(
                            (item) =>
                              `- ${item.quantity}x ${item.name}: $${(
                                item.price * item.quantity
                              ).toFixed(2)}`
                          )
                          .join("\n")}\n\nSubtotal: $${subtotal.toFixed(
                          2
                        )}\nEnvío: $2.50\nTotal: $${total.toFixed(2)}`
                      )}`
                    )
                  }
                >
                  Ordenar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center py-12">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Agrega algunos deliciosos platos para comenzar tu orden
            </p>
            <Button
              className="bg-[#9b2d1d] hover:bg-[#b3301f] text-white"
              asChild
            >
              <Link href="/menu">Ver Menú</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
