"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
};

const FeaturedDishes = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const dishes: Dish[] = [
    {
      id: 1,
      name: "Super Hamburguesa 3D",
      description:
        "Deliciosa hamburguesa con carne premium, queso derretido, lechuga fresca y nuestra salsa especial",
      price: 12.99,
      image: "https://i.imgur.com/hWa4Lfh.png",
      category: "burgers",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Tacos Supremos",
      description:
        "Tres tacos de carne asada con cilantro, cebolla y salsa de la casa en tortillas recién hechas",
      price: 9.99,
      image: "https://i.imgur.com/XQbHAVm.png",
      category: "tacos",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Pizza 3D Especial",
      description:
        "Pizza con masa artesanal, salsa de tomate casera, mozzarella, pepperoni y vegetales frescos",
      price: 14.99,
      image: "https://i.imgur.com/w5BJFOL.png",
      category: "pizzas",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Batido Tropical",
      description:
        "Refrescante batido de frutas tropicales mezcladas con yogurt natural y un toque de miel",
      price: 5.99,
      image: "https://i.imgur.com/tgVG2zF.png",
      category: "bebidas",
      rating: 4.6,
    },
  ];

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "burgers", name: "Hamburguesas" },
    { id: "tacos", name: "Tacos" },
    { id: "pizzas", name: "Pizzas" },
    { id: "bebidas", name: "Bebidas" },
  ];

  const filteredDishes =
    activeCategory === "todos"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Platos <span className="text-orange-500">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras creaciones más populares con presentaciones 3D
            espectaculares y sabores inigualables.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "border-orange-200 text-gray-700 hover:border-orange-500 hover:text-orange-500"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="relative h-48 bg-orange-50 flex items-center justify-center p-4">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="h-40 object-contain drop-shadow-xl"
                  whileHover={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-bold text-orange-500">
                    ${dish.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-700 ml-1">
                      {dish.rating}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-orange-500 border-orange-200 hover:bg-orange-50 hover:border-orange-500"
                    asChild
                  >
                    <Link href={`/menu/${dish.id}`}>Ver detalle</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
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

export default FeaturedDishes;
