"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¡Haz tu <span className="text-orange-500">Pedido</span>!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ordena tus platillos favoritos y disfruta de la mejor comida con
              un toque 3D único.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Opciones de pedido */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-orange-500 text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Opciones de Pedido
                  </h2>
                  <p>Elige la opción que prefieras para hacer tu pedido</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="https://wa.me/1234567890?text=Hola,%20quiero%20hacer%20un%20pedido"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 border border-green-500 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="p-3 bg-green-100 rounded-full text-green-600 mr-4">
                        <Phone size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          WhatsApp
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Envíanos un mensaje para hacer tu pedido
                        </p>
                      </div>
                      <ArrowRight className="text-green-500" />
                    </a>

                    <Link
                      href="/menu"
                      className="flex items-center p-4 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600 mr-4">
                        <ShoppingCart size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          Ver Menú
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Explora nuestro menú y selecciona tus platos favoritos
                        </p>
                      </div>
                      <ArrowRight className="text-orange-500" />
                    </Link>
                  </div>

                  <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Información de Entrega
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock size={18} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          Tiempo estimado de entrega: 30-45 minutos
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">
                          Entregamos en un radio de 5km desde nuestro local
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Métodos de pago */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full">
                <div className="bg-gray-800 text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">Métodos de Pago</h2>
                  <p>Aceptamos diferentes formas de pago para tu comodidad</p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <img
                        src="https://i.imgur.com/nNWzHfJ.png"
                        alt="Efectivo"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Efectivo
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Paga al recibir tu pedido
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <img
                        src="https://i.imgur.com/8XCCJRe.png"
                        alt="Tarjeta"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Tarjeta de Crédito/Débito
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Aceptamos todas las tarjetas principales
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <img
                        src="https://i.imgur.com/JmekYwa.png"
                        alt="Transferencia"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Transferencia Bancaria
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Datos proporcionados al confirmar tu pedido
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Notas Importantes
                    </h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Pedido mínimo: $10.00</li>
                      <li>Costo de envío dentro de la zona: $2.50</li>
                      <li>Tiempo de preparación: 15-20 minutos</li>
                      <li>
                        Cancelaciones: hasta 5 minutos después de realizar el
                        pedido
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Prefieres ordenar por teléfono?
              </h2>
              <p className="text-gray-600 mb-6">
                También puedes llamarnos directamente para hacer tu pedido o
                resolver cualquier duda:
              </p>
              <div className="text-3xl font-bold text-orange-500 mb-6">
                +52 55 1234 5678
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <a href="tel:+525512345678">Llamar Ahora</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                  asChild
                >
                  <Link href="/contacto">Contacto</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
