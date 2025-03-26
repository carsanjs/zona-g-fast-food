"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { getPopularItems } from "@/data/menu";
import { useCart } from "@/app/hook/useCart";

const FeaturedMenu = () => {
  const menuItems = getPopularItems();
  const { addToCart } = useCart();

  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const displayedItems = menuItems.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  const renderSpicyIndicator = (level: number | undefined) => {
    if (!level) return null;

    return (
      <div className="flex items-center ml-2">
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} size={12} className="text-red-500" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Platos <span className="text-orange-500">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra selección de los platos más populares, preparados
            con ingredientes frescos y técnicas únicas.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <Button
            variant="outline"
            size="icon"
            className="mr-4 text-orange-500 border-orange-300 hover:bg-orange-100"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </Button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  index === activeIndex ? "bg-orange-500" : "bg-orange-200"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="ml-4 text-orange-500 border-orange-300 hover:bg-orange-100"
            onClick={nextSlide}
          >
            <ChevronRight />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow border-orange-100">
                <div className="relative h-52 bg-gradient-to-br from-orange-100 to-orange-50 flex justify-center items-center">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="h-44 object-contain drop-shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      rotate: 3,
                      transition: { duration: 0.3 },
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                    {item.category}
                  </div>
                  {item.vegetarian && (
                    <div className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                      Veggie
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>
                      {renderSpicyIndicator(item.spicy)}
                    </div>
                    <span className="text-xl font-bold text-orange-500">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 mt-2"
                    onClick={() => addToCart(item)}
                  >
                    Agregar al Carrito
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <Link href="/menu">Ver Menú Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
