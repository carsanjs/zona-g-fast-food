"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircleIcon,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#561819] to-red-400 text-white relative overflow-hidden">
      {/* Animated Circles */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-300 opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-orange-300 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Ordena Ahora y Disfruta de Sabores Increíbles!
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Pedidos fáciles por WhatsApp y múltiples opciones de pago
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-gray-800 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600 mr-4">
                  <MessageCircleIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Envíanos un mensaje y haz tu pedido. Responderemos rápidamente
                para confirmar.
              </p>
              <div className="rounded-lg bg-gray-100 p-4 mb-6">
                <h4 className="font-medium mb-2">Cómo ordenar:</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#b3301f] text-white rounded-full mr-2 text-xs">
                      1
                    </span>
                    Envía un mensaje con tus platos
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#b3301f] text-white rounded-full mr-2 text-xs">
                      2
                    </span>
                    Confirma tu dirección
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#b3301f] text-white rounded-full mr-2 text-xs">
                      3
                    </span>
                    Elige método de pago
                  </li>
                </ol>
              </div>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white mt-auto"
                asChild
              >
                <a
                  href="https://wa.me/1234567890?text=Hola,%20quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ordenar por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-gray-800 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-2xl font-bold">Métodos de Pago</h3>
              </div>
              <p className="text-gray-600 mb-5">
                Ofrecemos múltiples opciones de pago para tu comodidad.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center">
                    <Image
                      src="https://img.freepik.com/vector-premium/icono-dinero-efectivo-aislado_24877-13371.jpg?w=2000"
                      alt="Efectivo"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Efectivo</h4>
                    <p className="text-sm text-gray-500">
                      Paga al momento de la entrega
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#b3301f] hover:bg-[#9b2d1d] text-white mt-auto"
                asChild
              >
                <Link href="/orden">
                  Ordenar Ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
